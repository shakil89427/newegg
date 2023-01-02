import React from "react";
import { useNavigate } from "react-router-dom";
import AdBanner from "../AdBanner/AdBanner";
import PulseLoader from "react-spinners/PulseLoader";

const FixedView = ({ type, data, loading, loadMore }) => {
  const navigate = useNavigate();
  if (!data.length && loading) {
    return (
      <div className="w-fit mx-auto mt-32">
        <PulseLoader color="#FE5900" size={30} />
      </div>
    );
  }
  if (!data.length) return null;

  return (
    <div className="max-w-[1400px] px-5 mx-auto pt-10 pb-40">
      <p className="text-lg md:text-xl lg:text-2xl font-bold mb-5">{type}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-20">
        {data.map((item, index) =>
          index === 4 || index === 13 ? (
            <div key={index} className="col-span-2 md:col-span-3 xl:col-span-4">
              <AdBanner />
            </div>
          ) : (
            <div
              key={index}
              onClick={() => navigate(`/details/${item?._id}`)}
              className="shadow-sm rounded-lg overflow-hidden"
            >
              <div className="w-full aspect-[7/5]">
                <img
                  src={`https://source.unsplash.com/random/300x200?sig=${item?._id}`}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3">
                <p className="font-bold text-md md:text-lg lg:text-xl break-words py-3">
                  {item.name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm md:text-md font-bold">
                    ₹{item.inPrice}
                  </p>
                  <del className="text-sm text-[#848484] hidden lg:inline">
                    ₹{item.inStrikeThroughPrice}
                  </del>
                  <p className="text-xs md:text-sm text-[#0A8200]">(30% off)</p>
                </div>
                <del className="text-xs md:text-sm text-[#848484] lg:hidden">
                  ₹{item.inStrikeThroughPrice}
                </del>
              </div>
            </div>
          )
        )}
      </div>
      {!loading && (
        <p
          onClick={() => loadMore()}
          className="bg-[#FE5900] mt-20 text-center py-2 max-w-[200px] mx-auto rounded-md font-bold text-white cursor-pointer select-none"
        >
          Load More
        </p>
      )}
      {loading && (
        <div className="w-fit mx-auto mt-20">
          <PulseLoader color="#FE5900" size={20} />
        </div>
      )}
    </div>
  );
};

export default FixedView;
