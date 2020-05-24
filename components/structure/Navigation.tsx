import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
type T = any;

const NavigationComponent: FC<T> = () => {
  return (
    <Container>
      <Navigation>
        <div className="left">Instagram</div>

        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <div id="logo">
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Tarzana logo" />
            </a>
          </Link>
        </div>
        <Link href="">
          <a>Item</a>
        </Link>
        <Link href="">
          <a>Item</a>
        </Link>
        <div className="right">Cart</div>
      </Navigation>
    </Container>
  );
};

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 2em 0;

  a {
    text-decoration: none;
    padding: 0 40px;
  }

  #logo {
    width: 200px;
    height: 100%;
    margin: 0;

    img {
      max-width: 100%;
    }

    a {
      padding: 0;
    }

    h1 {
      margin: inherit;
      letter-spacing: -5px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  padding: 0 15px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  .left,
  .right {
    flex: 1;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }
`;

export default NavigationComponent;
