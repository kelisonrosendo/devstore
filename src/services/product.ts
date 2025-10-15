import { env } from "@/app/env";
import { Product } from "@/types";

const BASE_URL = env.NEXT_PUBLIC_API_BASE_URL;

export const ProductService = {
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await fetch(BASE_URL, {
      next: {
        revalidate: 60 * 60,
      },
    });

    const products: Product[] = await response.json();

    return products.slice(0, 3);
  },
  async getProductBySlug(slug: string): Promise<Product> {
    const response = await fetch(BASE_URL, {
      next: {
        revalidate: 60 * 60,
      },
    });

    const products: Product[] = await response.json();

    const product = products.find((product) => product.slug === slug);

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  },
  async searchProducts(query: string): Promise<Product[]> {
    const response = await fetch(BASE_URL, {
      next: {
        revalidate: 60 * 60,
      },
    });

    const products: Product[] = await response.json();

    const searchedProducts = products.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    });

    return searchedProducts;
  },
};
