export interface Product {
  title: string;
  handle?: string;
  variants: ProductVariant[];
  images: ProductImage[];
  productType?: string;
  id: string;
  description: string;
  publishedAt: string;
}

export interface ProductImage {
  altText?: string;
  id: string;
  src: string;
}

export interface ProductVariant {
  title: string;
  handle?: string;
  available: boolean;
  price: string;
}
