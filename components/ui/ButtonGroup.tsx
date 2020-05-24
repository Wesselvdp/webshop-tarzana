import React, { FC } from "react";
import styled from "styled-components";

type T = {
  className?: string;
};

const ButtonGroup: FC<T> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ButtonGroup;

const Container = styled.div`
  display: inline-flex;
  margin-bottom: 1em;
  button {
    margin-right: 7.5px;
  }

  &.centered {
    button {
      margin: 15px;

      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-left: 0;
      }
    }
  }
`;
