import React, { FC } from 'react'
import Link from 'next/link'

import { Product } from "@/interfaces";

// Components
import Section from './Section'
import ProductGrid from '@components/product/ProductGrid'

type T = {
  products: Product[];
}


const FeaturedProducts: FC<T> = ({ products }) => {
  return (
    <Section>
      <h2>Featured products</h2>
      <ProductGrid products={products.slice(0, 3)} />
    </Section>
  )
}

export default FeaturedProducts