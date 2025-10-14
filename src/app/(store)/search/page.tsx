import Image from "next/image";
import Link from "next/link";

export default function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletão</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom`}
          className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src=""
            alt=""
            className="group-hover:scale-105 duration-500"
            width={920}
            height={920}
          />

          <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">title</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(10).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
