import { useState, useEffect, useRef } from "react";
import Button from "./button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  // Função para fechar o menu se clicar fora dele
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-black text-white h-full py-2 px-8">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="md:pl-20">
          <img className="w-[25%]" src={logo} alt="Logo" />
        </div>

        {/* Botão de menu para mobile */}
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="text-white">
            &#9776; {/* Ícone de hambúrguer */}
          </button>
        </div>

        {/* Links do menu */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:gap-12 lg:items-center absolute lg:static top-16 left-0 bg-black w-full lg:w-auto p-4 lg:p-0`}
        >
          <a href="home" className="block lg:inline">
            Home
          </a>
          <a href="exercicios" className="block lg:inline">
            Exercícios
          </a>
          <a href="treinos" className="block lg:inline">
            Treinos
          </a>
          <a href="planos" className="block lg:inline">
            Planos
          </a>
          <div>
            <Button label="Contato" onClick={() => alert("Clicou!")} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
