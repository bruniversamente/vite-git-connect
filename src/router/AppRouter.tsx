// src/router/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";
import Home from "../pages/home";
import BlogIndex from "../pages/blog";
import BlogPost from "../pages/blog/slug";
import CasosIndex from "../pages/casosdesucesso";
import CasoSlug from "../pages/casosdesucesso/slug";
import Sobre from "../pages/sobre";
import SobreAdachi from "../pages/sobre/adachi";
import SobreAdoniran from "../pages/sobre/adoniran";
import Contato from "../pages/contato";
import Solucoes from "../pages/solucoes";
import SolucaoViabilidade from "../pages/solucoes/viabilidade";
import SolucaoAprovacao from "../pages/solucoes/aprovacao";
import PoliticaPriv from "../pages/politica-de-privacidade";
import TermosUso from "../pages/termos-de-uso";
import Login from "../pages/login";
import PainelHome from "../pages/painel";
import PainelFormulario from "../pages/painel/formulario";
import MeusProcessos from "../pages/painel/meus-processos";
import ProcessoDetalhe from "../pages/painel/meus-processos/ProcessoDetalhe";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <BlogIndex /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "casosdesucesso", element: <CasosIndex /> },
      { path: "casosdesucesso/:slug", element: <CasoSlug /> },
      { path: "sobre", element: <Sobre /> },
      { path: "sobre/adachi", element: <SobreAdachi /> },
      { path: "sobre/adoniran", element: <SobreAdoniran /> },
      { path: "contato", element: <Contato /> },
      { path: "solucoes", element: <Solucoes /> },
      { path: "solucoes/viabilidade", element: <SolucaoViabilidade /> },
      { path: "solucoes/aprovacao", element: <SolucaoAprovacao /> },
      { path: "politica-de-privacidade", element: <PoliticaPriv /> },
      { path: "termos-de-uso", element: <TermosUso /> },
      { path: "login", element: <Login /> },
      { path: "painel", element: <PainelHome /> },
      { path: "painel/formulario", element: <PainelFormulario /> },
      { path: "painel/meus-processos", element: <MeusProcessos /> },
      { path: "painel/meus-processos/:documentId", element: <ProcessoDetalhe /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
