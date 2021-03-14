import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import SelectSession from "../../components/SelectSession";
import CardNews from "../../components/CardNews";

function Home() {
  const [newsSession, setNewsSession] = useState("technology.json");
  return (
    <PageContainer>
      <SelectSession setNewsSession={setNewsSession} />
      <CardNews newsSession={newsSession} />
    </PageContainer>
  );
}

export default Home;
