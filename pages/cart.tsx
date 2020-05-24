import React, { FC, useEffect, useState } from "react";
import { shopifyClient, createCheckout } from "@shopify";
type T = any;

const CartPage: FC<T> = () => {
  // const [p, setP] = useState<ShopifyBuy.Product[]>([]);
  // console.log(shopifyClient);
  // useEffect(() => {
  //   const getData = async () => {
  //     const x = await shopifyClient.product.fetchAll();
  //     setP(x);
  //   };
  //   getData();
  //   console.log(p);
  // }, []);
  return (
    <div>
      <h2>Cart Page</h2>
      <button onClick={() => createCheckout()}>Click me</button>
    </div>
  );
};

export default CartPage;
