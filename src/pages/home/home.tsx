import Navbar from "../../components/navbar";
import hero from "../../assets/image1.png";
import ButtonPrimary from "../../components/buttonPrimary";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col bg-black md:h-screen h-auto pb-4 text-white md:px-36 px-4 md:pt-20 md:gap-8 gap-4 bg-no-repeat md:bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: window.innerWidth >= 768 ? "40%" : "65%",
          backgroundPosition: window.innerWidth >= 768 ? "85%" : "100% -10%",
        }}
      >
        <div className="flex md:items-center justify-between">
          <div className="md:text-9xl text-5xl">
            <h1>Exercícios</h1>
            <h1>Cardio</h1>
          </div>
          <div className="flex flex-col gap-4 pt-10">
            <div className="bg-zinc-800 py-2 md:px-8 px-2 rounded-2xl">
              <h3 className="text-yellow-300 md:text-3xl animate-blink">
                38:14
              </h3>
              <p className="text-zinc-300 md:text-sm text-xs">Time</p>
            </div>
            <div className="bg-zinc-800 py-2 md:px-8 px-2 rounded-2xl">
              <h3 className="text-red-600 md:text-3xl animate-blink">165</h3>
              <p className="text-zinc-300 md:text-sm text-xs">Calorias</p>
            </div>
          </div>
        </div>
        <div>
          <p className="w-1/2 text-sm">
            Transforme sua saúde com o poder dos exercícios cardio –
            resistência, energia e bem-estar em cada movimento.
          </p>
        </div>
        <div className="flex gap-4 md:w-1/2">
          <ButtonPrimary label="Começar" onClick={() => alert("Clicou")} />
          <ButtonPrimary
            label="Pré-visualização"
            onClick={() => alert("Clicou")}
            className="bg-zinc-800"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
