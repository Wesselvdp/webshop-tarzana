import React, { FC } from 'react'
import Link from 'next/link'

import { Product } from "shopify-storefront-api-typings";

type T = {
  products: Product[];
}

const FeaturedProducts: FC<T> = ({products}) => {
  return (
    <div>
      <h2>Featured products</h2>
      {
        products.map(x => (
          <Link key={x.id} href={`/products/${x.handle}`}>
            <span >{x.title} </span>
          </Link>
        ))
       }
    </div>
  )
}

export default FeaturedProducts