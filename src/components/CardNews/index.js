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
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [newsSummary, setNewsSummary] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    ListNews.get(newsSession).then((response) => setNews(response.data.results));
    setLoading(false);
  }, [newsSession]);

  return (
    <Container>
      <GridUI container spacing={1}>
        <GridUI container item xs={15} spacing={3}>
          {loading ? <h2>loading</h2>
            : news.map((e) => (
              <CardUI onClick={() => { setNewsSummary(e); handleOpen(); }}>
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
