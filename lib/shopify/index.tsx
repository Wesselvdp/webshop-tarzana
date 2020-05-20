import Client from 'shopify-buy';

export const shopify = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN || '',
  storefrontAccessToken: process.env.SHOPIFY_MAIN_TOKEN || ''
});
