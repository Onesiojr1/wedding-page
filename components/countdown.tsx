import Timer from "./timer";

export default function Countdown() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="space-y-3">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Contagem Regressiva
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              Local, data e horário do evento
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <h3 className="text-sm font-semibold text-white/90">Onde?</h3>
              <p className="mt-1 text-sm text-white/70">Av. Antônio Emmerich, 952 - Vila Sao Jorge, São Vicente - SP, 11390-000</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <h3 className="text-sm font-semibold text-white/90">Que dia?</h3>
              <p className="mt-1 text-2xl font-semibold text-white/70">4 de Setembro</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <h3 className="text-sm font-semibold text-white/90">Que horas?</h3>
              <p className="mt-1 text-2xl font-semibold text-white/70">20:00</p>
            </div>
          </div>

          <Timer />
        </div>
      </div>
    </section>
  );
}
