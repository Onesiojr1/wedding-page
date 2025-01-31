'use client';
import { useForm } from "react-hook-form";
import { useState } from "react";

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

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log('aqui')
    try {
      const response = await fetch("/api/salvarDados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    console.log('aqui 2')
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Erro ao enviar dados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Confirme sua presença!</h1>
        <p className="text-center text-gray-700 mb-6">
          Quero saber se terei o privilégio de tê-lo conosco nesse dia tão especial.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Estará presente no evento?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Sim"
                  {...register("presenca", { required: "Por favor, selecione uma opção." })}
                  className="h-4 w-4 text-blue-500"
                />
                <span>Sim</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Não"
                  {...register("presenca", { required: "Por favor, selecione uma opção." })}
                  className="h-4 w-4 text-blue-500"
                />
                <span>Não</span>
              </label>
            </div>
            {errors.presenca && <p className="text-red-500 text-sm mt-1">{errors.presenca.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
            <input
              type="text"
              {...register("nomeCompleto", { required: "Por favor, insira seu nome completo." })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.nomeCompleto && <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">E-mail</label>
            <input
              type="email"
              {...register("email", { required: "Por favor, insira um e-mail válido." })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Celular</label>
            <input
              type="tel"
              {...register("celular", { required: "Por favor, insira seu número de celular." })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Qtd. de pessoas (incluindo você)</label>
            <input
              type="number"
              min="1"
              {...register("quantidade", { required: "Por favor, insira a quantidade de pessoas." })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.quantidade && <p className="text-red-500 text-sm mt-1">{errors.quantidade.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Nomes das pessoas (incluindo você)</label>
            <textarea
              {...register("nomes", { required: "Por favor, insira os nomes." })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows={4}
              placeholder="Coloque apenas os nomes das pessoas separados por vírgula (,)."
            />
            {errors.nomes && <p className="text-red-500 text-sm mt-1">{errors.nomes.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>
        </form>
      </div>
    </div>
  );
}
