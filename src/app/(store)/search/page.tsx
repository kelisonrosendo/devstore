import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProductService } from "@/services/product";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = await searchParams;

  if (!query) {
    redirect("/");
  }

  const products = await ProductService.searchProducts(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              unoptimized
              src={product.images[0]}
              alt={product.title}
              className="group-hover:scale-105 duration-500"
              width={400}
              height={400}
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
