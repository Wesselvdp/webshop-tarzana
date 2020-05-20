import React, { FC } from 'react'
import { shopify } from '@shopify';
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Product } from '@/interfaces'



// Components
// import FeaturedProducts from '@components/sections/FeaturedProducts'
type T = any

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if(params) {
    const product = await shopify.product.fetchByHandle(params.productHandle);
    console.log('creating', product )
    return {
      props: {
        singleProduct: JSON.stringify(product)
      }
    }
  } else {
    console.log('nope')
    return {props: {}}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await shopify.product.fetchAll();

  const paths = products.map(({handle}) => ({ params: { productHandle: handle || '' }}))

  return {
   paths,
    fallback: false
  }
}


const ProductPage: FC<T> = ({ singleProduct }) => {
  const product: Product = JSON.parse(singleProduct)
  return (
    <div>
      <h2>{product.title}</h2>
      {/* <FeaturedProducts products={products} /> */}
    </div>
  )
}

export default ProductPage