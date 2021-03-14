import styled from "styled-components";
import { Modal, Fade } from "@material-ui/core";

export const ModalUI = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FadeUI = styled(Fade)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 40px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
`;

export const Container = styled.div`
  margin: 0 10px;
  max-width: 760px;
`;

export const Title = styled.h2`
  margin: 10px auto;
`;

export const LinkNews = styled.a`
  margin: 10px auto;
  color: ${({ theme }) => theme.palette.link};

  :hover {
    color: ${({ theme }) => theme.palette.darkBlue};
  }
`;

export const Abstract = styled.p`
  margin: 10px auto;
`;
