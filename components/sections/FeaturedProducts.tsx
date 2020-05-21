import React, { FC } from 'react'
import Link from 'next/link'

import { Product } from "shopify-storefront-api-typings";
import Section from './Section'
type T = {
  products: Product[];
}

const FeaturedProducts: FC<T> = ({products}) => {
  return (
    <Section>
      <h2>Featured products</h2>
      {
        products.map(x => (
          <Link key={x.id} href={`/products/${x.handle}`}>
            <span >{x.title} </span>
          </Link>
        ))
       }
    </Section>
  )
}

export default FeaturedProducts