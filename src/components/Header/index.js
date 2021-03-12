import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import {
  Container,
  Logo,
  ContainerTitle,
  Title
} from "./styles";

function Header() {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <ContainerTitle>
            <Logo />
            <Title>Technology and Science</Title>
          </ContainerTitle>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
