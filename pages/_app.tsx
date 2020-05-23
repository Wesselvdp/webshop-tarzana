import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Layout from "@components/structure/Layout";

import "../styles/main.scss";

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
    inactive: "#a7a5a5", // Random grey color, check with design
  },
  maxWidth: "1400px",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
