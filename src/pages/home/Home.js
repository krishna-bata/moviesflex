import React from "react";
import HomeBanner from "./homeBanner/HomeBanner";

import './Home.scss'
import Trending from "./trending/Trending";
import Popular from './popular/Popular'
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
