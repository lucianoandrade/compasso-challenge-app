import React, { useState, useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
import ListNews from "../../services/constants";
import { Container, useStyles } from "./styles";

function Home() {
  const [news, setNews] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    ListNews.get().then((response) => setNews(response.data.results));
  }, []);

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid container item xs={15} spacing={3}>
          { news.map((e) => (
            <Grid item xs={4}>
              <Paper className={classes.paper}>{e.title}</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
