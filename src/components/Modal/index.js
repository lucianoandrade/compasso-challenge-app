import React from "react";
import { Backdrop } from "@material-ui/core";
import {
  ModalUI,
  FadeUI,
  Container,
  Title,
  LinkNews,
  Abstract
} from "./styles";

function NewsModal({ open, handleClose, news }) {
  return (
    <ModalUI
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300
      }}
    >
      <FadeUI in={open}>
        <Container>
          <Title id="spring-modal-title">{news.title}</Title>
          <Abstract id="spring-modal-description">{news.abstract}</Abstract>
          <LinkNews href={news.short_url}>
            Read the full story at The New York times here
          </LinkNews>
        </Container>
      </FadeUI>
    </ModalUI>
  );
}
export default NewsModal;
