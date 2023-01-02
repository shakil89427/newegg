import React, { useState, useEffect } from "react";

const ImageGrid = ({ product }) => {
  const [allItems, setAllItems] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (product?.blob?.length) {
      setAllItems(product?.blob);
      setSelected(product?.blob[0]?.url);
    }
  }, [product]);

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-4 w-full aspect-[6/4]">
        <img
          src={selected}
          alt=""
          className=" rounded-md w-full h-full object-cover object-center"
        />
      </div>
      {allItems.map((item) => (
        <div key={item.url} className="w-full aspect-[6/4]">
          <img
            src={item.url}
            alt=""
            onClick={() => setSelected(item.url)}
            className="w-full h-full object-cover object-center rounded-md cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
