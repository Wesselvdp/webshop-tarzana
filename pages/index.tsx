import React, { FC } from 'react'
import { shopify } from '@shopify';
import { GetStaticProps } from 'next'
import { Product } from "shopify-storefront-api-typings";


// Components
import Layout from '@components/structure/Layout';
import Mast from '@components/sections/Mast';
import FeaturedProducts from '@components/sections/FeaturedProducts';

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
     <Layout>
       <Mast />
       <FeaturedProducts products={products} />
     </Layout>
  )
}

export default HomePage