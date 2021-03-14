import React from "react";
import {
  Container, ButtonGroupUI, ButtonUI, TitleButton
} from "./styles";

function SelectSession({ setNewsSession }) {
  return (
    <Container>
      <ButtonGroupUI variant="text" color="inhert">
        <ButtonUI onClick={() => setNewsSession("technology.json")}>
          <TitleButton>Technology</TitleButton>
        </ButtonUI>
        <ButtonUI onClick={() => setNewsSession("science.json")}>
          <TitleButton>Science</TitleButton>
        </ButtonUI>
      </ButtonGroupUI>
    </Container>
  );
}
export default SelectSession;
