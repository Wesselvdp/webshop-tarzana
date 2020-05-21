import React, { FC } from 'react'
import { shopify } from '@shopify';
import { GetStaticProps } from 'next'
import { Product } from "shopify-storefront-api-typings";


// Components
import Mast from '@components/sections/Mast';
import FeaturedProducts from '@components/sections/FeaturedProducts';
import Button from '@components/ui/Button'

type T = {
  allProducts: any
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopify.product.fetchAll();
  return {
    props: {
      allProducts: JSON.stringify(products)
    }
  }
}


const HomePage: FC<T> = ({ allProducts }) => {
  const products: Product[] = JSON.parse(allProducts)
  return (
  <>
       <Mast />
       <FeaturedProducts products={products} />
       <Button buttonStyle="outlined" href="/">Outlined</Button>
       <Button buttonStyle="solid" color="primary" href="/">Solid White</Button>
       <Button buttonStyle="solid" color="secondary" href="/">Solid Black</Button>
  </>
  )
}

export default HomePage