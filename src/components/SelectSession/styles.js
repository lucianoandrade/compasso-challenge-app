import styled from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;
export const ButtonUI = styled(Button)`
`;
export const ButtonGroupUI = styled(ButtonGroup)`
`;
export const TitleButton = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.black};
`;
