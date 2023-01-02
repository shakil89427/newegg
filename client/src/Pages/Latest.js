import React, { useState, useEffect } from "react";
import useStore from "../Store/useStore";
import FixedView from "../Components/Products/FixedView";
import axios from "axios";

const Latest = () => {
  const { latest, setLatest } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
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
    <FixedView
      type={"Latest"}
      data={latest}
      loading={loading}
      loadMore={getData}
    />
  );
};

export default Latest;
