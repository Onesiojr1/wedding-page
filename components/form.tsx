'use client';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface FormData {
  presenca: string;
  nomeCompleto: string;
  email: string;
  celular: string;
  quantidade: number;
  nomes: string;
}

export default function ConfirmForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [feedbackType, setFeedbackType] = useState<"success" | "error">("success");

  useEffect(() => {
    if (!feedbackOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFeedbackOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [feedbackOpen]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/salvarDados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setFeedbackType("error");
        setFeedbackMessage(result?.message ?? "Erro ao enviar dados");
        setFeedbackOpen(true);
        return;
      }

      setFeedbackType("success");
      setFeedbackMessage(result?.message ?? "Confirmação enviada com sucesso!");
      setFeedbackOpen(true);
    } catch {
      setFeedbackType("error");
      setFeedbackMessage("Erro ao enviar dados");
      setFeedbackOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {feedbackOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setFeedbackOpen(false);
          }}
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
            <div
              className={
                feedbackType === "success"
                  ? "text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                  : "text-center text-2xl font-semibold tracking-tight text-red-700 sm:text-3xl"
              }
            >
              {feedbackType === "success" ? "Confirmação enviada" : feedbackMessage}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className={
                  feedbackType === "success"
                    ? "rounded-xl bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    : "rounded-xl bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
                }
                onClick={() => setFeedbackOpen(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Confirme sua presença!
        </h1>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          Queremos saber se teremos o privilégio de tê-lo conosco nesse dia tão especial.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Estará presente no evento?
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="Sim"
                  {...register("presenca", { required: "Por favor, selecione uma opção." })}
                  className="h-4 w-4 text-slate-900"
                />
                <span className="text-sm text-slate-700">Sim</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="Não"
                  {...register("presenca", { required: "Por favor, selecione uma opção." })}
                  className="h-4 w-4 text-slate-900"
                />
                <span className="text-sm text-slate-700">Não</span>
              </label>
            </div>
            {errors.presenca && <p className="text-red-500 text-sm mt-1">{errors.presenca.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Nome Completo</label>
            <input
              type="text"
              {...register("nomeCompleto", { required: "Por favor, insira seu nome completo." })}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
            {errors.nomeCompleto && <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">E-mail</label>
            <input
              type="email"
              {...register("email", { required: "Por favor, insira um e-mail válido." })}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Celular</label>
            <input
              type="tel"
              {...register("celular", { required: "Por favor, insira seu número de celular." })}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
            {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Qtd. de pessoas (incluindo você)
            </label>
            <input
              type="number"
              min="1"
              {...register("quantidade", { required: "Por favor, insira a quantidade de pessoas." })}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
            />
            {errors.quantidade && <p className="text-red-500 text-sm mt-1">{errors.quantidade.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Nomes das pessoas (incluindo você)
            </label>
            <textarea
              {...register("nomes", { required: "Por favor, insira os nomes." })}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              rows={4}
              placeholder="Coloque apenas os nomes das pessoas separados por vírgula (,)."
            />
            {errors.nomes && <p className="text-red-500 text-sm mt-1">{errors.nomes.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>
        </form>
      </div>
    </div>
  );
}
