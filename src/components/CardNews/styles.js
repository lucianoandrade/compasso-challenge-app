import styled from "styled-components";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  margin-top: 5%;
`;
export const GridUI = styled(Grid)`
  justify-content: center;
`;
export const CardUI = styled(Card)`
  margin: 25px 5px 0;
  max-width: 345px;
`;
export const CardActionAreaUI = styled(CardActionArea)`
`;
export const CardMediaUI = styled(CardMedia)`
  height: 140px;
`;
export const CardActionsUI = styled(CardActions)`
`;
export const CardContentUI = styled(CardContent)`
  height: 200px;
`;
export const ButtonUI = styled(Button)`
`;
export const TypographyTitleUI = styled(Typography)`
  height: 100px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TypographyUI = styled(Typography)`
  height: 60px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
