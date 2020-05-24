import React, { FC } from "react";
import styled from "styled-components";
import { ProductImage } from "@/types/interfaces";

type T = {
  productImage: ProductImage;
  className?: string;
  onClick?: any;
};

const ProductImageComponent: FC<T> = ({ productImage, className }) => {
  return (
    <Component className={className}>
      {/* Product Image */}

      <Background
        className="background"
        style={{ backgroundImage: "url('/images/card.svg')" }}
      ></Background>
      <Background
        className="background tiger"
        style={{ backgroundImage: "url('/images/tiger.png')" }}
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

  picture {
    z-index: 1;
  }

  img {
    max-width: 75%;
    z-index: 10;
    /* mix-blend-mode: multiply; */
    transition: all 0.3s ease;
  }
`;

const Background = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.45s cubic-bezier(0.25, 0.1, 0.57, 1.46);

  &.tiger {
    background-size: contain;
    z-index: -1;
    left: 0;
    top: 0;
  }

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export default ProductImageComponent;
