import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useAddToCart from "../../Hooks/useAddToCart";
import { useNavigate } from "react-router-dom";

const Info = ({ product }) => {
  const { addToCart } = useAddToCart();
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-xl lg:text-2xl xl:text-3xl font-bold break-words">
        {product?.name}
      </p>
      <p className="mt-8 text-sm">Sold By : Andrew John</p>
      <div className="flex items-center gap-2">
        <Rating
          className="text-md text-[#F7C02B] pt-1"
          initialRating={4.5}
          readonly
          emptySymbol={<AiOutlineStar className="text-black" />}
          fullSymbol={<AiFillStar className="text-black" />}
        />
        <p className="text-sm">4.5</p>
        <p className="text-sm">1422 Reviews</p>
      </div>
      <div className="flex items-center gap-2 my-8">
        <p className="text-sm md:text-md lg:text-lg font-bold">
          ₹{product?.inPrice}
        </p>
        <del className="text-sm text-[#848484]">
          ₹{product?.inStrikeThroughPrice}
        </del>
        <p className="text-sm text-[#0A8200] font-bold">(30% off)</p>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        <button
          onClick={() => addToCart(product)}
          className="border rounded-md bg-white py-3 border-black mr-3 w-40 font-bold"
        >
          Add to cart
        </button>
        <button
          onClick={() => navigate("/paymentdetails", { state: product })}
          className="border rounded-md bg-[#FE5900] py-3 border-[#FE5900] mr-3 text-white w-40 font-bold"
        >
          Buy now
        </button>
      </div>
      <p className="mt-8 mb-2 text-lg lg:text-xl font-bold">
        Product Description
      </p>
      <p className="text-[#575757] break-words">{product?.description}</p>
    </div>
  );
};

export default Info;
