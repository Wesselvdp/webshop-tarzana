import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type T = {
  href?: string;
  className?: string;
  buttonStyle: "outlined" | "solid";
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: any;
  hover?: boolean;
};

type StyleProps = {
  buttonStyle?: "outlined" | "solid";
  color?: "primary" | "secondary";
  theme: any;
};

const ButtonComponent: FC<T> = (props) => {
  const {
    onClick,
    children,
    disabled,
    href,
    buttonStyle,
    color,
    className,
    hover = true,
  } = props;

  return (
    <Button
      onClick={onClick}
      className={`${className} ${!hover ? "no-hover" : ""} ${
        disabled ? "disabled" : ""
      }`}
      color={color}
      buttonStyle={buttonStyle}
    >
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
    padding: 1.5em 3em;
    cursor: pointer;
    box-sizing: border-box;


    &.block {
      width: 100%;
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
      cursor: initial;

      &:hover {
        background-color: inherit;
        color: inherit;
      }
    }

    /* Outlined */
    ${({ buttonStyle, theme }) =>
      buttonStyle === "outlined" &&
      `
      color: ${theme.colors.primary};
      background-color: transparent;

      &:hover:not(.no-hover) {
        color: ${theme.colors.secondary};
        background-color:  ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary}
      }
  `}

  /* Solid White */
    ${({ buttonStyle, color, theme }) =>
      buttonStyle === "solid" &&
      color !== "secondary" &&
      `
      color: ${theme.colors.secondary};
      background-color:  ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover:not(.no-hover) {
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

      &:hover:not(.no-hover) {
        color: ${theme.colors.secondary};
        background-color:  ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary}

      }
  `}
   
   a {
     text-decoration: none;
     color: inherit;
   }
`;

export default ButtonComponent;
