import { data } from "../lib/data";
import Product from "./product";

export default function Store() {
  return (
    <section id="presentes" className="bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-center">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lista de Presentes
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            Se quiser nos presentear, escolha um item abaixo.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((product) => (
              <Product
                key={product.name}
                name={product.name}
                price={product.price}
                image={product.image}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}