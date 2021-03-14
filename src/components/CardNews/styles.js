import styled from "styled-components";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
`;
export const GridUI = styled(Grid)`
  justify-content: center;
`;
export const CardUI = styled(Card)`
  margin: 25px 5px 0;
  max-width: 345px;
  width: 100%;
`;
export const CardActionAreaUI = styled(CardActionArea)`
`;
export const CardMediaUI = styled(CardMedia)`
  height: 140px;
`;
export const CardContentUI = styled(CardContent)`
  height: 140px;
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
