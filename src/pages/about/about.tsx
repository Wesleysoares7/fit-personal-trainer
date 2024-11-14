import personal from "../../assets/personal.png";
import bgAbout from "../../assets/bg-about.jpg";
import ButtonPrimary from "../../components/buttonPrimary";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="about"
      className="bg-black text-white px-4 md:px-36 md:bg-no-repeat md:pb-2"
      style={
        isDesktop
          ? {
              backgroundImage: `url(${bgAbout})`,
              backgroundSize: "46%",
              backgroundPosition: "80% 85%",
            }
          : {}
      }
    >
      <h1 className="text-3xl font-bold mb-8">Sobre mim</h1>
      <div className="md:relative">
        <div className="flex flex-col-reverse gap-2 md:flex-row relative">
          <div className="flex flex-col justify-center gap-2 md:gap-10 pt-2 md:w-1/2 ">
            <h1
              className="font-blackOps text-2xl drop-shadow-lg md:text-5xl"
              style={{
                textShadow: "3px 3px 6px #fd9204",
              }}
            >
              Gustavo Costa
            </h1>
            <p className="text-justify pb-2 md:pr-3">
              Sou um personal trainer dedicado, apaixonado por ajudar pessoas a
              transformarem suas vidas através da atividade física. Com anos de
              experiência e formação em educação física, ofereço treinos
              personalizados que respeitam as necessidades e objetivos de cada
              aluno. Meu foco está em promover saúde e bem-estar, combinando
              técnicas eficazes de exercícios com motivação constante para que
              você alcance resultados reais. Vamos juntos superar limites e
              descobrir o poder do seu corpo!
            </p>
          </div>
          <div className="flex justify-center">
            <img src={personal} alt="" className="w-1/2 z-10" />
          </div>
          <div className="md:hidden">
            <img src={bgAbout} alt="" className="absolute rounded-lg pt-2" />
          </div>
        </div>
        <div className="pb-2 md:absolute md:top-[26rem] md:pl-14">
          <ButtonPrimary
            label="Tire suas duvidas agora."
            onClick={() => alert("Clicou")}
            icon={<FaWhatsapp />}
            className="bg-secondary1 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
