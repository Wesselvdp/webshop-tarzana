import React, { FC } from 'react'
import { shopify } from '@shopify';
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Product } from '@/interfaces'

 

// Components
import FeaturedProducts from '@components/sections/FeaturedProducts'
import ProductDetail from '@components/sections/ProductDetail'


export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) return {props: {}}
  const handle: string = Array.isArray(params) ? '' : String(params.productHandle);

  // Data fetching
  const product = await shopify.product.fetchByHandle(handle);
  const allProducts = await shopify.product.fetchAll();

  return {
    props: {
      singleProduct: JSON.stringify(product),
      allProducts: JSON.stringify(allProducts)
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

type T = {
  singleProduct: any
  allProducts: any
}


const ProductPage: FC<T> = ({ singleProduct, allProducts }) => {
  const product: Product = JSON.parse(singleProduct)
  const products: Product[] = JSON.parse(allProducts)
  return (
    <div>
      <h2>{product.title}</h2>
      <ProductDetail product={product} />
      <FeaturedProducts title="you might also like" showButton={true} products={products.slice(0, 3)} />
    </div>
  )
}

export default ProductPage