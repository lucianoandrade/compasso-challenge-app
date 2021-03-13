import React, { useState, useEffect } from "react";
import ListNews from "../../services/constants";
import NewsImage from "../../assets/images/newsImage.png";
import {
  Container,
  GridUI,
  CardUI,
  CardActionAreaUI,
  CardMediaUI,
  CardActionsUI,
  CardContentUI,
  ButtonUI,
  TypographyTitleUI,
  TypographyUI
} from "./styles";

function CardNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    ListNews.get().then((response) => setNews(response.data.results));
  }, []);

  return (
    <Container>
      <GridUI container spacing={1}>
        <GridUI container item xs={15} spacing={3}>
          {news.map((e) => (
            <>
              <CardUI>
                <CardActionAreaUI>
                  <CardMediaUI
                    image={
                      e.multimedia[0].url ? e.multimedia[0].url : NewsImage
                    }
                    title={
                      e.multimedia[0].caption
                        ? e.multimedia[0].caption
                        : "News image"
                    }
                  />
                  <CardContentUI>
                    <TypographyTitleUI gutterBottom variant="h5" component="h2">
                      {e.title}
                    </TypographyTitleUI>
                    <TypographyUI
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {e.abstract}
                    </TypographyUI>
                  </CardContentUI>
                </CardActionAreaUI>
                <CardActionsUI>
                  <ButtonUI size="small" color="primary">
                    Summary
                  </ButtonUI>
                  <ButtonUI size="small" color="primary">
                    Read on NYT
                  </ButtonUI>
                </CardActionsUI>
              </CardUI>
            </>
          ))}
        </GridUI>
      </GridUI>
    </Container>
  );
}

export default CardNews;
