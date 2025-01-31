import ConfirmForm from "../components/form";
import Timer from "../components/timer";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full flex bg-hero items-center justify-center">
        <h1 className="text-6xl font-bold text-blue-700 pb-16">
          Marvin Maluco
        </h1>
      </div>
      <div className="py-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-start justify-center pb-12 px-4 md:px-24 gap-4">
          <h2 className="text-3xl font-bold text-[#519ecf]">
            Quem diria que uma simples ida a um bar, para comemorar um
            aniversário, nos traria até aqui?
          </h2>
          <span className="text-2xl text-[#519ecf]">
            Estamos dando um grande passo, unindo nossas vidas, sonhos e o
            desejo de estarmos sempre juntos. Não é só sobre dividir camas e
            contas, mas sobre construir um lar cheio de amor e companheirismo.
            Por isso, queremos você ao nosso lado nessa celebração tão especial.
            Venha comemorar com a gente o início desse novo ciclo, que será
            ainda mais feliz com sua presença!
          </span>
        </div>
      </div>
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
      <div className="py-12 bg-blue-500">
      <div className="max-w-screen-2xl mx-auto">
      <ConfirmForm />
      </div>
      </div>
    </div>
  );
}
