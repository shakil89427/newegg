import React, { useState, useEffect } from "react";
import useStore from "../Store/useStore";
import FixedView from "../Components/Products/FixedView";
import axios from "axios";

const Trending = () => {
  const { trending, setTrending } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/product",
        {
          params: { category: "latest", skip: trending.length },
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
    <FixedView
      type={"Trending"}
      data={trending}
      loading={loading}
      loadMore={getData}
    />
  );
};

export default Trending;
