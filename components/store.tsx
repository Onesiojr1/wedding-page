"use client";

import { useMemo, useState } from "react";
import { data } from "../lib/data";
import Product from "./product";

export default function Store() {
  const PAGE_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleProducts = useMemo(
    () => data.slice(0, Math.min(visibleCount, data.length)),
    [visibleCount]
  );

  const canLoadMore = visibleCount < data.length;

  return (
    <section id="presentes" className="bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-center">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lista de Presentes
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            Os itens desta lista são simbólicos e meramente ilustrativos.<br />
            O valor do presente será recebido pelo casal e utilizado para nossos planos e sonhos.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <Product
                key={product.name}
                name={product.name}
                price={product.price}
                image={product.image}
                link={product.link}
              />
            ))}
          </div>

          {canLoadMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Veja mais
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}