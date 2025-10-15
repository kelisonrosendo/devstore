import Image from "next/image";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductService } from "@/services/product";

interface ProductProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = await params;
  const product = await ProductService.getProductBySlug(slug);

  return (
    <div className="relative grid max-h-[868px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          unoptimized
          src={product.images[0]}
          alt={product.title}
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <span className="text-sm text-zinc-400">
            Em até 12x de{" "}
            {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}
