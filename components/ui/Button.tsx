import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type T = {
  href?: string;
  className?: string;
  buttonStyle: "outlined" | "solid";
  color?: "primary" | "secondary";
};

type StyleProps = {
  buttonStyle?: "outlined" | "solid";
  color?: "primary" | "secondary";
  theme: any;
};

const ButtonComponent: FC<T> = (props) => {
  const { children, href, buttonStyle, color } = props;

  return (
    <Button color={color} buttonStyle={buttonStyle}>
      {href ? (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
};

const Button = styled("button")<StyleProps>`
    border: 2px solid;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1em 2em;

    /* Outlined */
    ${({ buttonStyle, theme }) =>
      buttonStyle === "outlined" &&
      `
      color: ${theme.colors.primary};
      background-color: transparent;

      &:hover {
        color: ${theme.colors.secondary};
        background-color:  ${theme.colors.primary};
      }
  `}

  /* Solid White */
    ${({ buttonStyle, color, theme }) =>
      buttonStyle === "solid" &&
      color === "primary" &&
      `
      color: ${theme.colors.secondary};
      background-color:  ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.primary};
        background-color:  ${theme.colors.secondary};
      }
  `}

  /* Solid Black */
    ${({ buttonStyle, color, theme }) =>
      buttonStyle === "solid" &&
      color === "secondary" &&
      `
      color: ${theme.colors.primary};
      background-color:  ${theme.colors.secondary};

      &:hover {
        color: ${theme.colors.secondary};
        background-color:  ${theme.colors.primary};
      }
  `}
   
   a {
     text-decoration: none;
     color: inherit;
   }
`;

export default ButtonComponent;
