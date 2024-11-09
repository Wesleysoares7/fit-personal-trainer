import Button from "./button";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-black text-white h-full py-2 px-8">
      <nav className="flex justify-between items-center">
        <div className="pl-20">
          <img className="w-[25%]" src={logo} alt="" />
        </div>
        <div className="flex gap-12 items-center">
          <a href="home">Home</a>
          <a href="home">Exercicios</a>
          <a href="home">Treinos</a>
          <a href="home">Planos</a>
          <div>
            <Button label="Contato" onClick={() => alert("Clicou!")} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
