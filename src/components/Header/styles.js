import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
import LogoNews from "../../assets/images/logo.png";

export const Container = styled.header`
  width: 100%;
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoNews,
  alt: "Logotipo criado para o desafio Compasso UOL"
}))`
  max-width: 75px;
  width: 100%;
  padding: 10px 0;
  height: auto;
`;

export const ContainerTitle = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: auto 0 auto 20px;
`;

export const AppBarUI = styled(AppBar)`
`;
export const ToolbarUI = styled(Toolbar)`
`;
