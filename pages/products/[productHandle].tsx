import React, { FC } from 'react'
import { shopify } from '@shopify';
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Product } from '@/interfaces'



// Components
// import FeaturedProducts from '@components/sections/FeaturedProducts'
// import Layout from '@components/structure'
type T = any

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) return {props: {}}
  const handle: string = Array.isArray(params) ? '' : String(params.productHandle);

    const product = await shopify.product.fetchByHandle(handle);
    console.log('creating', product )
    return {
      props: {
        singleProduct: JSON.stringify(product)
      }
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