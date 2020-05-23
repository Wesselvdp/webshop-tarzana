import React, { FC } from "react";
import styled from "styled-components";
import { ProductImage } from "@/interfaces";

type T = {
  productImage: ProductImage;
  className?: string;
};

const ProductImageComponent: FC<T> = ({ productImage, className }) => {
  return (
    <Component className={className}>
      {/* Product Image */}

      <Background
        className="background"
        style={{ backgroundImage: "url('/images/card.svg')" }}
      ></Background>
      <picture>
        <img src={productImage.src} alt="" />
      </picture>
    </Component>
  );
};

const Component = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  max-width: 400px;
  margin: 0 auto;

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  img {
    max-width: 75%;
    mix-blend-mode: multiply;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export default ProductImageComponent;
