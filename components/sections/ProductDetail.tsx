import React, { FC } from 'react'
import { Product } from '@/interfaces'

type T = {
  product: Product
}

import ProductConfig from '@components/product/ProductConfig'
import Section from './Section'

const ProductDetail: FC<T> = ({product}) => {
  return (
   <Section>
     <ProductConfig product={product} />
   </Section>
  )
}

export default ProductDetail