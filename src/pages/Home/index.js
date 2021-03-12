import React, { useState, useEffect } from "react";
import PageContainer from "../../components/features/PageContainer";
import ListNews from "../../services/constants";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    ListNews.get().then((response) => setNews(response.data.results));
  }, []);

  return (
    <PageContainer>
      <h1>News -  Home NYT</h1>
      <br />
      {news.map((e) => <ul>{e.title}</ul>)}
    </PageContainer>
  );
}

export default Home;
