import React, { useState } from "react";
import {
  Container,
  ButtonGroupUI,
  ButtonUI,
  TitleTechnology,
  TitleScience
} from "./styles";

function SelectSession({ setNewsSession }) {
  const [selectTechnology, setSelectTechnology] = useState(true);
  const [selectScience, setSelectScience] = useState(false);
  return (
    <Container>
      <ButtonGroupUI variant="text" color="inhert">
        <ButtonUI
          onClick={() => {
            setNewsSession("technology.json");
            setSelectTechnology(true);
            setSelectScience(false);
          }}
        >
          <TitleTechnology select={selectTechnology}>
            Technology
          </TitleTechnology>
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNewsSession("science.json");
            setSelectTechnology(false);
            setSelectScience(true);
          }}
        >
          <TitleScience select={selectScience}>
            Science
          </TitleScience>
        </ButtonUI>
      </ButtonGroupUI>
    </Container>
  );
}
export default SelectSession;
