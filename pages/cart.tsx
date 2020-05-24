import React from "react";
import { createCheckout, shopifyClient } from "@shopify";
import { NextPage } from "next";

type T = {
  checkout: ShopifyBuy.Cart;
};

const CartPage: NextPage<T> = ({ checkout }) => {
  console.log(checkout);
  return (
    <div>
      <h2>Cart Page</h2>
      <button onClick={() => createCheckout()}>Click me</button>
    </div>
  );
};

CartPage.getInitialProps = async () => {
  const checkout = await shopifyClient.checkout.create();
  return { checkout };
};

export default CartPage;
