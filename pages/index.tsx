import React, { FC, useEffect } from 'react'
import { shopify } from '../lib/shopify';
import { GetStaticProps } from 'next'


import Layout from '@components/structure/Layout'

type T = any

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopify.product.fetchAll();
  console.log('products:', products)

  return {
    props: {
      products: JSON.stringify(products)
    }
  }
}



const HomePage: FC<T> = () => {

  return (
     <Layout>
       Hello world
     </Layout>
  )
}

export default HomePage