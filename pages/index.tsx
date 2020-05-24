import React, { FC } from "react";
import { shopifyClient } from "@shopify";
import { GetStaticProps } from "next";
import { Product } from "@/types/interfaces";

// Components
import Mast from "@components/sections/Mast";
import FeaturedProducts from "@components/sections/FeaturedProducts";
import Instagram from "@components/sections/Instagram";

type T = {
  allProducts: any;
  checkout: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopifyClient.product.fetchAll();
  const checkout = await shopifyClient.checkout.create();
  console.log("checkout", checkout);
  console.log(products);
  return {
    props: {
      allProducts: JSON.stringify(products),
      checkout: JSON.stringify(checkout),
    },
  };
};

const HomePage: FC<T> = ({ allProducts, checkout }) => {
  const products: Product[] = JSON.parse(allProducts);
  const checkoutX = JSON.parse(checkout);
  console.log(checkoutX);
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
