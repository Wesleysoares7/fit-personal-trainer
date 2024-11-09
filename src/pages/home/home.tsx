import Navbar from "../../components/navbar";
import hero from "../../assets/image1.png";
import Button from "../../components/button";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col bg-black h-screen text-white px-36 pt-20 gap-8 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "45%",
          backgroundPosition: "85%",
        }}
      >
        <div className="flex  items-center justify-between">
          <div className="text-9xl">
            <h1>Exercícios</h1>
            <h1>Cardio</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-800 py-2 px-8 rounded-2xl">
              <h3 className="text-yellow-300 text-3xl animate-blink">38:14</h3>
              <p className="text-zinc-300 text-sm">Time</p>
            </div>
            <div className="bg-zinc-800 py-2 px-8 rounded-2xl">
              <h3 className="text-red-600 text-3xl animate-blink">165</h3>
              <p className="text-zinc-300 text-sm">Calorias</p>
            </div>
          </div>
        </div>
        <div>
          <p className="w-1/2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex gap-4 w-1/2">
          <Button label="Começar" onClick={() => alert("Clicou")} />
          <Button
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
