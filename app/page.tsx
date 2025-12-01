import Countdown from "../components/countdown";
import ConfirmForm from "../components/form";
import Store from "../components/store";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full flex bg-hero  bg-cover items-center justify-center">
        <h1 className="text-6xl font-bold text-blue-700 pb-16">
          Casamento Marvin e Rafaella
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
      <Countdown />
      <Store />
      <div className="py-12 bg-blue-500">
        <div className="max-w-screen-2xl mx-auto">
          <ConfirmForm />
        </div>
      </div>
    </div>
  );
}
