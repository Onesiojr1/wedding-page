import { data } from "../lib/data";
import Product from "./product";

export default function Store() {
  return (
    <div className="py-12 max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl font-bold">Lista de Presentes</h2>
        <div className="w-full py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
    </div>
  );
}