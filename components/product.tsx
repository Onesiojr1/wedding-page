import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  image: string;
  link: string;
}

export default function Product(props: ProductProps) {
  return (
    <div className="w-64 mx-auto bg-white shadow-md hover:shadow-xl duration-500 rounded-xl overflow-hidden">
      <a href={props.link} target="_blank" className="block">
        <div className="relative" style={{ aspectRatio: "1/1", margin: "32px" }}>
          <Image
            src={props.image}
            alt={props.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="px-4 py-3 flex flex-col justify-between h-28 gap-4">
          <div className="min-h-12 flex items-center justify-center">
            <p className="text-lg font-semibold text-center">{props.name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg font-bold">{props.price}</p>
            <div className="ml-auto">
              <Image src="/cart.png" alt="cart" width={25} height={25} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
