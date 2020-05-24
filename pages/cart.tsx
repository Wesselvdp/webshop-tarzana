import React from "react";
import { createCheckout, shopifyClient } from "@shopify";
import { NextPage } from "next";

type T = {
  checkout: ShopifyBuy.Cart;
};

const CartPage: NextPage<T> = ({ checkout }) => {
  fetch("https://api.chucknorris.io/jokes/random").then((res) =>
    console.log(res)
  );
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
