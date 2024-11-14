type CardTrainingProps = {
  nome: string;
  imagem: string;
};

const CardTraining = ({ nome, imagem }: CardTrainingProps) => (
  <div className="bg-black rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
    <img src={imagem} alt={nome} className="w-full h-40 object-cover" />
    <h2 className="text-xl font-bold pt-2">{nome}</h2>
  </div>
);

export default CardTraining;
