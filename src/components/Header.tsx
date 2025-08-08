import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
import HeaderDropdownBlog from "./HeaderDropdownBlog";
import HeaderDropdownCasos from "./HeaderDropdownCasos";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Fecha menus ao navegar
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">smartOPEA</Link>

        {/* Botão mobile */}
        <button
          aria-label="Abrir menu"
          className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded border"
          onClick={() => setMobileOpen((v) => !v)}
        >
          Menu
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          <NavLink to="/solucoes" onMouseEnter={() => setOpen("solucoes")} onMouseLeave={() => setOpen(null)}>
            Soluções
          </NavLink>
          <div onMouseEnter={() => setOpen("blog")} onMouseLeave={() => setOpen(null)}>
            <NavLink to="/blog">Blog</NavLink>
            {open === "blog" && <HeaderDropdownBlog />}
          </div>
          <div onMouseEnter={() => setOpen("casos")} onMouseLeave={() => setOpen(null)}>
            <NavLink to="/casosdesucesso">Casos</NavLink>
            {open === "casos" && <HeaderDropdownCasos />}
          </div>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/login" className="ml-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5">
            Entrar
          </NavLink>
        </nav>
      </div>


      {/* Dropdown desktop */}
      {open === "solucoes" && (
        <HeaderDropdown onClose={() => setOpen(null)} />
      )}

      {/* Menu mobile */}
      {mobileOpen && (
        <nav className="md:hidden absolute inset-x-0 top-16 z-50 bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 grid gap-2">
            <NavLink to="/solucoes" onClick={() => setMobileOpen(false)}>Soluções</NavLink>
            <NavLink to="/blog" onClick={() => setMobileOpen(false)}>Blog</NavLink>
            <NavLink to="/casosdesucesso" onClick={() => setMobileOpen(false)}>Casos</NavLink>
            <NavLink to="/sobre" onClick={() => setMobileOpen(false)}>Sobre</NavLink>
            <NavLink to="/contato" onClick={() => setMobileOpen(false)}>Contato</NavLink>
            <NavLink to="/login" onClick={() => setMobileOpen(false)} className="mt-2 inline-block rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 w-max">Entrar</NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
