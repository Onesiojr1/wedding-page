import Timer from "./timer";

export default function Countdown() {
  return (
    <div className="py-12 bg-red-500">
      <div className="flex flex-col justify-center items-center  px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Contagem Regressiva</h2>
        <div className="flex gap-12 flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <h3>Onde?</h3>
            <span>Av. Paulista, 1234</span>
          </div>
          <div className="flex flex-col items-center">
            <h3>Que dia?</h3>
            <span>15 de dezembro</span>
          </div>
          <div className="flex flex-col items-center">
            <h3>Que horas?</h3>
            <span>13:30</span>
          </div>
        </div>
        <Timer />
      </div>
    </div>
  );
}
