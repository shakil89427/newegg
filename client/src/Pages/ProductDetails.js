import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageGrid from "../Components/ProductDetails/ImageGrid";
import Info from "../Components/ProductDetails/Info";
import SellerReviewsWarranty from "../Components/ProductDetails/SellerReviewsWarranty";
import Latest from "../Components/Products/Sliders/Latest";
import Popular from "../Components/Products/Sliders/Popular";
import useStore from "../Store/useStore";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

const ProductDetails = () => {
  const { latest, popular, trending } = useStore();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://neweggserver.azurewebsites.net/api/product/${_id}`
      );
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const allProducts = [...latest, ...popular, ...trending];
    const matched = allProducts.find((item) => item?._id === _id);
    if (matched) {
      setProduct(matched);
      setLoading(false);
    } else {
      getProduct();
    }
  }, [_id]);

  if (loading) {
    return (
      <div className="w-fit mx-auto mt-20">
        <PulseLoader color="#FE5900" size={20} />
      </div>
    );
  }

  if (!product?._id) {
    return <p className="text-center mt-10">Not found</p>;
  }

  return (
    <div className="pt-14 pb-28 max-w-[1400px] px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ImageGrid product={product} />
        </div>
        <div>
          <Info product={product} />
          <SellerReviewsWarranty product={product} />
        </div>
      </div>
      <div className="mt-14">
        <div className="py-10">
          <Latest />
        </div>
        <div className="py-10">
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
