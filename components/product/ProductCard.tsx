import React, { FC } from 'react'
import styled from 'styled-components';
import { Product, ProductVariant, ProductImage } from '@/interfaces';
import Link from 'next/link';

type T = {
  product: Product;
}

const ProductCardComponent: FC<T> = ({ product }) => {
    const price: string = product.variants[0].price
  const productImage: ProductImage = product.images[0];

  return (
   <Link href={`/products/${product.handle}`}>
    <ProductCard>
      {/* Image */}
      <div>
        <picture>
          <img src={productImage.src} alt={productImage.altText || product.title}/>
        </picture>
      </div>

      {/* Info */}
      <span>$ {price}</span>
      <p>
        {product.productType || ''}
      </p>
      <p>
      {product.title}
      </p>
    </ProductCard>
   </Link>
  )
}

const ProductCard = styled.div`
  background: orange;
  max-width: 400px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  img {
    max-width: 100%;
  }

  p {
    margin: 0;
  }
`

export default ProductCardComponent