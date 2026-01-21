import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  image: string;
  link: string;
}

export default function Product(props: ProductProps) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <a href={props.link} target="_blank" rel="noreferrer" className="block h-full">
        <div className="relative mx-8 my-8" style={{ aspectRatio: "1/1" }}>
          <Image
            src={props.image}
            alt={props.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex h-[7.5rem] flex-col justify-between gap-4 px-5 pb-5">
          <div className="min-h-12">
            <p className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900">
              {props.name}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">{props.price}</p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span>Ver</span>
              <Image src="/cart.png" alt="cart" width={18} height={18} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
