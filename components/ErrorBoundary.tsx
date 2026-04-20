"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // Silencia erros de loader-data (arquivos JSON não encontrados do SSG)
    if (
      error.message?.includes("is not valid JSON") ||
      error.message?.includes("Unexpected token") ||
      error.message?.includes("loader-data")
    ) {
      // Redireciona suavemente para a home em vez de travar
      if (typeof window !== "undefined") {
        this.setState({ hasError: false });
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            background: "#0a0a0a",
            color: "#f5f5f5",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Ops! Algo deu errado
          </h1>
          <p style={{ color: "#999", marginBottom: "1.5rem" }}>
            Houve um problema ao carregar esta página.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "#f59e0b",
              color: "#000",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight: "0.75rem",
            }}
          >
            Tentar novamente
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              background: "transparent",
              color: "#f5f5f5",
              border: "1px solid #333",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Ir para a Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
