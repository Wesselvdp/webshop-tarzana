import React, { FC } from "react";
import styled from "styled-components";

type T = {
  productType?: string;
  title: string;
  price: string;
};

const ProductShortInfo: FC<T> = ({ price, productType, title }) => {
  return (
    <Summary>
      <p className="type">{productType || ""}</p>
      <h2 className="title">{title}</h2>
      <span>${price}</span>
    </Summary>
  );
};

const Summary = styled.div`
  margin-bottom: 1em;

  .type {
    margin-bottom: 0;
  }

  .title {
    /* margin-bottom: 0; */
  }
`;
export default ProductShortInfo;
