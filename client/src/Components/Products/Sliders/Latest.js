import React, { useState, useEffect } from "react";
import useStore from "../../../Store/useStore";
import Slider from "./Slider";
import axios from "axios";

const Latest = () => {
  const { latest, setLatest, latestIndex, setLatestIndex } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/product",
        {
          params: { category: "latest", skip: latest.length },
        }
      );
      setLatest((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!latest?.length) {
      getData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Slider
      type={"Latest"}
      data={latest}
      loading={loading}
      activeIndex={latestIndex}
      setActiveIndex={setLatestIndex}
      seeAllPath={"/latest"}
    />
  );
};

export default Latest;
