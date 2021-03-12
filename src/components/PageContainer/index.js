import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/global";
import { Container } from "./styles";
import Header from "../Header";

const PageContainer = (props) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {props.children}
      </Container>
    </ThemeProvider>
  </>
);
export default PageContainer;
