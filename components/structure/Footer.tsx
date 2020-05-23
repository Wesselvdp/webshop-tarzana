import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import EmailSubmit from "@components/ui/EmailSubmit";
type T = any;

const FooterComponent: FC<T> = () => {
  return (
    <Footer style={{ backgroundImage: "url('/images/card.svg')" }}>
      <div className="container">
        <div className="col">
          <h3>Newsletter</h3>
          {/* <input type="text" name="" id="" placeholder="Your e-mail here"/>
         <input type="submit" name="" id=""/> */}
          <EmailSubmit />
        </div>

        {/* Logo */}
        <div className="col">
          <h1>TARZANA</h1>
        </div>

        {/* Navigation */}
        <div className="col">
          <ul role="nav">
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  color: #000;
  text-align: left;
  border: 1px solid green;
  padding-top: 12em;
  background-size: 130%;
  background-repeat: no-repeat;
  background-position: 39% 1%;

  .container {
    background-color: #fff;
    max-width: ${({ theme }) => theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 0 15px;

    .col {
      flex: 1;
    }
  }

  ul {
    columns: 2;
    padding-left: 0;
    list-style: none;

    li {
    }
  }
`;

export default FooterComponent;
