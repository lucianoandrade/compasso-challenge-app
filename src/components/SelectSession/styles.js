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

export const TitleTechnology = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.black};
    background-color: ${({ select }) => (select ? "#A2A2A2" : "#E8E8E8")};
    padding: 6px 8px;
    border-radius: 4px;
`;

export const TitleScience = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.black};
    background-color: ${({ select }) => (select ? "#A2A2A2" : "#E8E8E8")};
    padding: 6px 8px;
    border-radius: 4px;
`;
