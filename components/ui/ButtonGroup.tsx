import React, { FC } from "react";
import styled from "styled-components";

type T = any;

const ButtonGroup: FC<T> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ButtonGroup;

const Container = styled.div`
  display: inline-flex;

  button {
    margin: 0 15px;

    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-left: 0;
    }
  }
`;
