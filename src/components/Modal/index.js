import React from "react";
import { Backdrop } from "@material-ui/core";
import { ModalUI, FadeUI } from "./styles";

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
        <div>
          {/* <img src={NewsImage} alt="news" /> */}
          <h2 id="spring-modal-title">{news.title}</h2>
          <a href={news.short_url}>{news.short_url}</a>
          <p id="spring-modal-description">{news.abstract}</p>
        </div>
      </FadeUI>
    </ModalUI>
  );
}
export default NewsModal;
