import React, { FC } from "react";
import { shopify } from "@shopify";

import { GetStaticPaths, GetStaticProps } from "next";

// import { Product } from "@/types/interfaces";

// Components
import FeaturedProducts from "@components/sections/FeaturedProducts";
import ProductDetail from "@components/sections/ProductDetail";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  const handle: string = Array.isArray(params)
    ? ""
    : String(params.productHandle);

  // Data fetching
  const product = await shopify.product.fetchByHandle(handle);
  const allProducts = await shopify.product.fetchAll();
  const filteredProducts: ShopifyBuy.Product[] = allProducts.filter(
    (p) => p.handle !== handle
  );

  return {
    props: {
      singleProduct: JSON.stringify(product),
      allProducts: JSON.stringify(filteredProducts),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await shopify.product.fetchAll();

  const paths = products.map(({ handle }) => ({
    params: { productHandle: handle || "" },
  }));

  return {
    paths,
    fallback: false,
  };
};

type T = {
  singleProduct: any;
  allProducts: any;
};

const ProductPage: FC<T> = ({ singleProduct, allProducts }) => {
  const product = JSON.parse(singleProduct);
  const products = JSON.parse(allProducts);
  return (
    <div>
      <ProductDetail product={product} />
      <FeaturedProducts
        title="you might also like"
        showButton={true}
        products={products.slice(0, 3)}
      />
    </div>
  );
};

export default ProductPage;
