import React, { FC, useEffect } from 'react'
import { shopify } from '../lib/shopify';
import { GetStaticProps } from 'next'
import { Product } from "shopify-storefront-api-typings";



import Layout from '@components/structure/Layout'

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
       Hello world
       {
        products.map(x => <span>{x.title}</span>)
       }
     </Layout>
  )
}

export default HomePage