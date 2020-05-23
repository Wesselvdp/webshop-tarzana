import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "@/types/interfaces";

import ProductCard from "./ProductCard";

type T = {
  products: Product[];
};

const ProductGrid: FC<T> = ({ products }) => {
  return (
    <Grid>
      {products.map((x: Product) => (
        <Item key={x.id}>
          <ProductCard product={x} />
        </Item>
      ))}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  padding: 4%;
  flex-grow: 1;
  flex-basis: 25%;
`;
