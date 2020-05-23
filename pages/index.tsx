import React, { FC } from "react";
import { shopify } from "@shopify";
import { GetStaticProps } from "next";
import { Product } from "@/types/interfaces";

// Components
import Mast from "@components/sections/Mast";
import FeaturedProducts from "@components/sections/FeaturedProducts";
import Instagram from "@components/sections/Instagram";

type T = {
  allProducts: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopify.product.fetchAll();
  return {
    props: {
      allProducts: JSON.stringify(products),
    },
  };
};

const HomePage: FC<T> = ({ allProducts }) => {
  const products: Product[] = JSON.parse(allProducts);
  return (
    <>
      <Mast />
      <FeaturedProducts
        title="Featured Products"
        showButton={true}
        products={products}
      />
      <Instagram />
    </>
  );
};

export default HomePage;
