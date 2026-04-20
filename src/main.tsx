import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.tsx";
import "./index.css";

// ─── Patch global fetch ───────────────────────────────────────────────────────
// Intercepta requisições de loader-data do vite-react-ssg.
// Se o servidor retornar HTML (404 page) ao invés de JSON,
// devolve {} em vez de deixar o app crashar.
if (typeof window !== "undefined") {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = typeof args[0] === "string" ? args[0] : (args[0] as Request).url;

    // Só intercepta requisições de loader-data do SSG
    if (url.includes("loader-data") || url.includes("static/")) {
      try {
        const response = await originalFetch(...args);
        const contentType = response.headers.get("content-type") || "";

        // Se o servidor respondeu com HTML (404), retorna JSON vazio
        if (!contentType.includes("application/json") && !contentType.includes("text/plain")) {
          return new Response("{}", {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }

        return response;
      } catch {
        // Falha de rede: retorna JSON vazio também
        return new Response("{}", {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return originalFetch(...args);
  };
}

export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // any extra initialization can go here
  }
);
