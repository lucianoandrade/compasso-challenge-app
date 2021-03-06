import React, { useState, useEffect } from "react";
import ListNews from "../../services/constants";
import NewsImage from "../../assets/images/newsImage.png";
import Modal from "../Modal";
import {
  Container,
  GridUI,
  CardUI,
  CardActionAreaUI,
  CardMediaUI,
  CardContentUI,
  TypographyTitleUI
} from "./styles";

function CardNews({ newsSession }) {
  const [news, setNews] = useState([]);
  const [newsSummary, setNewsSummary] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getNews = () => {
    ListNews.get(newsSession)
      .then((response) => setNews(response.data.results))
      .catch(() => alert("error connecting to the information service"));
  };

  useEffect(() => {
    getNews();
  }, [newsSession]);

  return (
    <Container>
      <GridUI container spacing={1}>
        <GridUI container item xs={12} spacing={3}>
          {news.length === 0
            ? "Carregando..."
            : news.map((e) => (
              <CardUI
                key={e.short_url}
                onClick={() => {
                  setNewsSummary(e);
                  handleOpen();
                }}
              >
                <CardActionAreaUI>
                  <CardMediaUI
                    component="img"
                    loading="lazy"
                    image={
                      e.multimedia && e.multimedia[0].url
                        ? e.multimedia[0].url
                        : NewsImage
                    }
                    title={
                      e.multimedia && e.multimedia[0].caption
                        ? e.multimedia[0].caption
                        : "News image"
                    }
                  />
                  <CardContentUI>
                    <TypographyTitleUI
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {e.title}
                    </TypographyTitleUI>
                  </CardContentUI>
                </CardActionAreaUI>
              </CardUI>
            ))}
          <Modal open={open} news={newsSummary} handleClose={handleClose} />
        </GridUI>
      </GridUI>
    </Container>
  );
}

export default CardNews;
