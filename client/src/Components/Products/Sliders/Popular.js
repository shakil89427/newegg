import React, { useState, useEffect } from "react";
import useStore from "../../../Store/useStore";
import Slider from "./Slider";
import axios from "axios";

const Popular = () => {
  const { popular, setPopular, popularIndex, setPopularIndex } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/product",
        {
          params: { category: "popular", skip: popular.length },
        }
      );
      setPopular((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!popular?.length) {
      getData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Slider
      type={"Popular"}
      data={popular}
      loading={loading}
      activeIndex={popularIndex}
      setActiveIndex={setPopularIndex}
      seeAllPath={"/popular"}
    />
  );
};

export default Popular;
