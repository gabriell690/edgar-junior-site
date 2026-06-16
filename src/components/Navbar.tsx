"use client";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }

      setIsScrolled(currentScrollY > 40);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Lançamentos", href: "/lancamentos" },
    { label: "Campina Grande", href: "#campina" },
    { label: "João Pessoa", href: "#joaopessoa" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
          ${
            isScrolled
              ? "bg-black/60 backdrop-blur-xl border-b border-yellow-500/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-24 flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <img
                src="/logo.png"
                alt="Edgar Junior"
                className="
                  h-12
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="hidden lg:block">
                <p className="text-white text-xs tracking-[0.35em] font-semibold">
                  EDGAR JUNIOR
                </p>

                <p className="text-yellow-400 text-[10px] tracking-[0.3em]">
                  CRECI/PB 18457-F
                </p>
              </div>
            </Link>

            <nav
              className="
                hidden
                lg:flex
                absolute
                left-1/2
                -translate-x-1/2
                items-center
                gap-10
              "
            >
              {links.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="
                      text-white/80
                      hover:text-yellow-400
                      transition-all
                      duration-300
                      text-sm
                      font-medium
                      relative
                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-px
                      after:w-0
                      after:bg-yellow-400
                      after:transition-all
                      hover:after:w-full
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      text-white/80
                      hover:text-yellow-400
                      transition-all
                      duration-300
                      text-sm
                      font-medium
                      relative
                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-px
                      after:w-0
                      after:bg-yellow-400
                      after:transition-all
                      hover:after:w-full
                    "
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            <a
              href="https://wa.me/5583999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                lg:flex
                items-center
                px-6
                py-3
                rounded-full
                bg-linear-to-r
                from-yellow-500
                to-yellow-400
                text-black
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_30px_rgba(234,179,8,.25)]
              "
            >
              Agendar Atendimento
            </a>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-white"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-black/95
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            mobileMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            h-full
            gap-10
          "
        >
          {links.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenu(false)}
                className="
                  text-white
                  text-2xl
                  hover:text-yellow-400
                  transition
                "
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="
                  text-white
                  text-2xl
                  hover:text-yellow-400
                  transition
                "
              >
                {item.label}
              </a>
            )
          ))}

          <a
            href="https://wa.me/5583999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              px-8
              py-4
              rounded-full
              bg-yellow-400
              text-black
              font-semibold
            "
          >
            Agendar Atendimento
          </a>
        </div>
      </div>
    </>
  );
}