import Client, { Cart } from "shopify-buy";

export const shopifyClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "",
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_MAIN_TOKEN || "",
});

const getCheckout = async (): Promise<Cart> => {
  let checkout: Cart = {
    checkoutUrl: "",
    id: "",
    lineItems: [],
    subtotalPrice: "",
    lineItemCount: 0,
  };

  try {
    // 1
    console.log("looking for local checkoutId");
    const checkoutId: string | null = getLocalCheckoutId();
    if (!checkoutId) throw new Error("No local checkoutId found");
    // 2
    try {
      console.log("found local id, trying to fetch the checkout from shopify");
      checkout = await shopifyClient.checkout.fetch(checkoutId);
    } catch (err) {
      console.log("failed fetching shopify checkout with local id");
      console.log(err);
    }
  } catch (err) {
    console.log(err);
    checkout = await shopifyClient.checkout.create();
    saveLocalCheckoutId(checkout.id);
  }
  return checkout;
};

export const createCheckout = async () => {
  const checkout = await shopifyClient.checkout.create();
  console.log("the checkout is", checkout);
};

export const addToCart = async () => {
  const checkout = await getCheckout();
  console.log(checkout);
};

const getLocalCheckoutId = () => localStorage.getItem("tarzanaCheckoutId");
const saveLocalCheckoutId = (checkoutId: string | number) =>
  localStorage.setItem("tarzanaCheckoutId", checkoutId.toString());

// === //
// Get cart Data
// 1. Is checkoutId in localstorage?
// const getLocalCheckoutId = () => localStorage.getItem("tarzanaCheckoutId");
// YES ==> 2
// NO ==> 1.1: create checkoutId ==> 3

// 2. is checkoutId valid? (Fetch a checkout)
// YES ==> 3
// No ==> 2.1 Create checkoutId ==> 3

// we now have a valid checkout id! :)

// 3. Is there a cart in localStorage?
// YES ==> 4.
// NO ==> 3.1 Save cartItems in localStorage

// 4. Is the localStorage equal to the Shopify cart?
// YES ==> 5.
// NO ==> 4.1 We assume there is a local cart saved and the shopify cart is empty, save localCart to shopify. ==> 5

// 5. Are the items in the cart still available?
// Yes ==> 6
// NO ==> 5.1 notify user and remove items from the checkout

// We now have an up to date and valid cart! :):)

// 6. A: Add item to cart
// 6. B: Begin Checkout
