import React from "react";
import { FcRating } from "react-icons/fc";
import moneyback from "../../Assets/productdetails/moneyback.png";
import { AiFillStar } from "react-icons/ai";

const SellerReviewsWarranty = ({ product }) => {
  return (
    <div>
      <div className="px-5 py-8 mt-10  border-t-[6px] border-gray-100">
        <p className="mb-2 font-bold">Seller</p>
        <p className="mb-2 text-lg">Andrew John</p>
        <div className="flex items-center gap-2 font-bold text-sm mb-2">
          <FcRating className="text-lg" />
          <p>
            <span className="text-orange-700 font-bold">TOP RATED</span>
            <span className="text-gray-200 px-2">|</span>
            <span>1987 SALES</span>
          </p>
        </div>
        <p>1422 Reviews(98% Positive)</p>
      </div>
      <div className="px-5 py-8  border-t-[6px] border-gray-100">
        <p className="mb-2 font-bold text-lg">Reviews</p>
        <div className="mt-5 flex items-center w-fit mx-auto">
          <div className="flex flex-col justify-center pr-5">
            <span className="flex items-center text-3xl gap-2">
              <p>{product?.rating?.ratingCount}</p>
              <AiFillStar className="text-[#FE5900]" />
            </span>
            <p className="text-gray-500 mt-2">
              {product?.rating?.reviewCount} reviews
            </p>
          </div>
          <div className="pl-5 border-l-2">
            <div className="flex items-center gap-1">
              <p>5</p>
              <AiFillStar />
              <div className="w-28 h-2 bg-green-600 mx-2 rounded-full overflow-hidden" />
              <p className="text-gray-400">6646</p>
            </div>
            <div className="flex items-center gap-1">
              <p>4</p>
              <AiFillStar />
              <div className="w-28 h-2 bg-gray-300 mx-2 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-green-600 rounded-full" />
              </div>
              <p className="text-gray-400">6646</p>
            </div>
            <div className="flex items-center gap-1">
              <p>3</p>
              <AiFillStar />
              <div className="w-28 h-2 bg-gray-300 mx-2 rounded-full overflow-hidden">
                <div className="h-full w-[35%] bg-green-600 rounded-full" />
              </div>
              <p className="text-gray-400">6646</p>
            </div>
            <div className="flex items-center gap-1">
              <p>2</p>
              <AiFillStar />
              <div className="w-28 h-2 bg-gray-300 mx-2 rounded-full overflow-hidden">
                <div className="h-full w-[25%] bg-orange-400 rounded-full" />
              </div>
              <p className="text-gray-400">6646</p>
            </div>
            <div className="flex items-center gap-1">
              <p>1</p>
              <AiFillStar />
              <div className="w-28 h-2 bg-gray-300 mx-2 rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-red-600 rounded-full" />
              </div>
              <p className="text-gray-400">6646</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-8  border-t-[6px] border-gray-100">
        <p className="mb-2 font-bold text-lg">Warranty & Returns</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 text-sm text-[#575757]">
          <p>
            Item is Covered by:{" "}
            <span className="underline text-blue-700">Return Policy</span>
          </p>
          <p>
            Support phone:{" "}
            <span className="underline text-blue-700">67365476376</span>
          </p>
          <p>
            Website:{" "}
            <span className="underline text-blue-700">https://google.com</span>
          </p>
          <p>
            Support email:{" "}
            <span className="underline text-blue-700">support@email.com</span>
          </p>
        </div>
      </div>
      <div className="bg-[#FFF5E3] mt-5 flex items-center gap-5 p-3">
        <img src={moneyback} alt="" className="w-20" />
        <span>
          <p className="md:text-lg font-bold mb-2">
            14 days Replacement policy
          </p>
          <p className="text-sm text-[#555555]">
            If you aren't completely satisfied
          </p>
        </span>
      </div>
    </div>
  );
};

export default SellerReviewsWarranty;
