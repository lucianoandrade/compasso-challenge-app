import React from "react";
import {
  Container,
  AppBarUI,
  ToolbarUI,
  Logo,
  ContainerTitle,
  Title
} from "./styles";

function Header() {
  return (
    <Container>
      <AppBarUI position="static" color="inherit">
        <ToolbarUI>
          <ContainerTitle>
            <Logo />
            <Title>Technology and Science</Title>
          </ContainerTitle>
        </ToolbarUI>
      </AppBarUI>
    </Container>
  );
}
export default Header;
