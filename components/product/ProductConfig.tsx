import React, { FC, useState, useEffect } from "react";
import { Product, ProductVariant } from "@/interfaces";
import styled from "styled-components";

// Components
import Button from "@components/ui/Button";
import ProductImage from "./ProductImage";

type T = {
  product: Product;
};

const initialVariant = {
  title: "",
  handle: "",
  available: false,
  price: "",
};

const ProductConfig: FC<T> = ({ product }) => {
  const [variant, setVariant] = useState<ProductVariant>(initialVariant);
  const [infoOption, setInfoOption] = useState("info");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  useEffect(() => {
    const newVariant =
      product.variants.find(({ available }) => available) || initialVariant;
    setVariant(newVariant);
    console.log(newVariant);
  }, [product]);

  const infoOptions = ["info", "sizing", "shipping & returns"];

  return (
    <Container>
      <Col>
        <ProductImage productImage={selectedImage} />
      </Col>
      <Col>
        {/* Content */}
        <p>{product.productType || ""}</p>
        <h1>{product.title}</h1>
        <p>$ {variant.price}</p>

        {/* Variable Content Navigation */}
        <nav>
          {infoOptions.map((str) => (
            <button onClick={() => setInfoOption(str)} key={str}>
              {str}
            </button>
          ))}
        </nav>
        <p>{infoOption}</p>

        {/* Sizes */}
        <SizePicker>
          {product.variants.map((v) => (
            <button
              disabled={!v.available}
              className={variant === v ? "selected" : ""}
              onClick={() => setVariant(v)}
            >
              {v.title}
            </button>
          ))}
        </SizePicker>

        {/* Buy button */}
        <Button buttonStyle="solid" color="primary">
          Add to cart
        </Button>
      </Col>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: left;
`;
const Col = styled.div`
  flex: 1;
`;

const SizePicker = styled.div`
  display: flex;

  button.selected {
    background-color: red;
  }
`;

export default ProductConfig;
