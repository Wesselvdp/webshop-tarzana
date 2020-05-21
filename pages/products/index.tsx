import React, { FC } from 'react'
import { shopify } from '@shopify';
import { GetStaticProps } from 'next'
import { Product } from '@/interfaces'

import Collection from '@components/sections/Collection'

type T = any

const ProductsPage: FC<T> = ({allProducts}) => {
  const products: Product[] = JSON.parse(allProducts)

  return (
    <div>
      <Collection products={products} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await shopify.product.fetchAll();
  return {
    props: {
      allProducts: JSON.stringify(products)
    }
  }
}

export default ProductsPage