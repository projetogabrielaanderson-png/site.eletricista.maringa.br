import React from "react";
import { RouteObject } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicos from "./pages/Servicos";
import OndeAtendemos from "./pages/OndeAtendemos";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import TermosDeUso from "./pages/TermosDeUso";
import BairroPage from "./pages/bairros/BairroPage";
import ServicoPage from "./pages/servicos/ServicoPage";
import ServicoBairroPage from "./pages/servicos/ServicoBairroPage";



export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "servicos/:slug",
        element: <ServicoPage />,
      },
      {
        path: "bairros",
        element: <OndeAtendemos />,
      },
      {
        path: "bairros/:bairroSlug",
        element: <BairroPage />,
      },
      {
        path: "onde-atendemos",
        element: <OndeAtendemos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "privacidade",
        element: <Privacidade />,
      },
      {
        path: "termos-de-uso",
        element: <TermosDeUso />,
      },
      {
        path: ":bairroSlug",
        element: <BairroPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
