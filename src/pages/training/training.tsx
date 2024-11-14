import treinoFuncional from "../../assets/treino-funcional.jpg";
import treinoLivre from "../../assets/treino-livre.jpg";
import treinoMusculacao from "../../assets/treino-musculacao.jpg";
import treinoAlongamento from "../../assets/treino-alongamento.jpg";
import treinoHit from "../../assets/treino-hit.jpg";
import treinoGrupo from "../../assets/treino-grupo.jpg";
import CardTraining from "../../components/cardTraining";

const Treinos = [
  { nome: "Treino Funcional", imagem: treinoFuncional },
  { nome: "Treino Livre", imagem: treinoLivre },
  { nome: "Musculação", imagem: treinoMusculacao },
  { nome: "Alongamento", imagem: treinoAlongamento },
  { nome: "HIIT", imagem: treinoHit },
  { nome: "Treino em Grupo", imagem: treinoGrupo },
];

const Training = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="px-4 md:px-36">
        <h1 className="text-3xl font-bold mb-8">Treinos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Treinos.map((treino, index) => (
            <CardTraining
              key={index}
              nome={treino.nome}
              imagem={treino.imagem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
