import Countdown from "../components/countdown";
import ConfirmForm from "../components/form";
import Store from "../components/store";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen w-full bg-hero bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex min-h-screen max-w-screen-xl items-center justify-center px-6 py-20 text-center">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Casamento Marvin e Rafaella
            </h1>
            <p className="mt-6 text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
              Um dia especial para celebrar amor, família e amizade.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#rsvp"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white/90 sm:w-auto"
              >
                Confirmar presença
              </a>
              <a
                href="#presentes"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15 sm:w-auto"
              >
                Ver lista de presentes
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-pretty text-base leading-relaxed text-slate-700 sm:text-lg text-center">
              Nossa história começou na escola e, com o passar dos anos, crescemos juntos, compartilhando sonhos, desafios e tantas histórias. Agora, estamos prontos para oficializar esse amor e iniciar um novo capítulo: a formação da nossa família. <br />
              Queremos você ao nosso lado para celebrar esse momento tão especial!
            </p>
          </div>
        </div>
      </div>

      <Countdown />
      <Store />

      <section id="rsvp" className="bg-slate-50 py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <ConfirmForm />
        </div>
      </section>
    </div>
  );
}
