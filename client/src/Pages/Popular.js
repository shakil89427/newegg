import React, { useState, useEffect } from "react";
import useStore from "../Store/useStore";
import FixedView from "../Components/Products/FixedView";
import axios from "axios";

const Popular = () => {
  const { popular, setPopular } = useStore();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/product",
        {
          params: { category: "latest", skip: popular.length },
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
    <FixedView
      type={"Popular"}
      data={popular}
      loading={loading}
      loadMore={getData}
    />
  );
};

export default Popular;
