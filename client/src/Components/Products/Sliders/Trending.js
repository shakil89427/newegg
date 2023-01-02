import React, { useState, useEffect } from "react";
import useStore from "../../../Store/useStore";
import Slider from "./Slider";
import axios from "axios";

const Trending = () => {
  const { trending, setTrending, trendingIndex, setTrendingIndex } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/product",
        {
          params: { category: "trending", skip: trending.length },
        }
      );
      setTrending((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!trending?.length) {
      getData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Slider
      type={"Trending"}
      data={trending}
      loading={loading}
      activeIndex={trendingIndex}
      setActiveIndex={setTrendingIndex}
      seeAllPath={"/trending"}
    />
  );
};

export default Trending;
