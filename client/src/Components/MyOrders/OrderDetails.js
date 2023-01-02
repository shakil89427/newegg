import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  let order;

  return (
    <div>
      <span className="flex items-center gap-5">
        <p>Order ID</p>
        <p className="text-gray-500">seduhew89e8u9viuhoe</p>
      </span>
      <div className=" grid grid-cols-3 gap-3 border-y my-10 py-5">
        <div className="w-full aspect-square">
          <img
            src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2">
          <p className="lg:text-lg break-words mb-2">
            Lorem ipsum dolor sit amet elit. A sapiente, voluptas assumenda rat
            consectetur
          </p>
          <del className="text-gray-500">$1200</del>
          <p className="text-lg font-bold mt-1">$1200</p>
        </div>
      </div>
      <p className="text-gray-500">Order Status</p>
      {/* Progress start */}
      <div className="flex items-start gap-5 pb-10 my-10">
        <div className="flex flex-col items-center justify-between relative w-fit h-60">
          <div className="w-4 h-4 rounded-full bg-black" />
          <div
            className={`w-4 h-4 rounded-full ${
              order?.orderStatus?.shipped ? "bg-black" : "bg-gray-400"
            }`}
          />
          <div
            className={`w-4 h-4 rounded-full ${
              order?.orderStatus?.delivered ? "bg-black" : "bg-gray-400"
            }`}
          />
          <div className="absolute h-full top-0 w-1 bg-gray-400 -z-20" />
          <div
            className={`absolute top-0 w-1 bg-black -z-10 ${
              order?.orderStatus?.delivered
                ? "h-full"
                : order?.orderStatus?.shipped
                ? "h-1/2"
                : "h-0"
            }`}
          />
        </div>
        <div className="flex flex-col items-start justify-between h-60 font-semibold text-sm">
          <div className="relative">
            <p>Order Confirmed</p>
            {order?.creationDate && (
              <p className="absolute top-full left-0">
                bdfbdbdrb
                {/* {moment.unix(order?.creationDate).format("DD MMM YYYY")} */}
              </p>
            )}
          </div>
          <div className="relative">
            <p>Order Shipped</p>
            {order?.shippedDate && (
              <p className="absolute top-full left-0">
                dsvbdsbb
                {/* {moment.unix(order?.shippedDate).format("DD MMM YYYY")} */}
              </p>
            )}
          </div>
          <div className="relative">
            <p>Order Delivered</p>
            {order?.deliverDate && (
              <p className="absolute top-full left-0">
                sdfbsb
                {/* {moment.unix(order?.deliverDate).format("DD MMM YYYY")} */}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Progress end */}
      <p className="border-2 text-center p-3 font-bold rounded-md text-gray-500 select-none cursor-pointer">
        Contact us
      </p>
      <p className="my-5 bg-[#FE5900] border-2 border-[#FE5900] text-center p-3 font-bold rounded-md text-white select-none cursor-pointer">
        Invoice Download
      </p>
      <div className="mt-10 border-t py-10">
        <p className="text-gray-500 font-bold">Shipment Address</p>
        <p className="mt-4 font-bold">Andrew john</p>
        <p className="my-2">3321 kings creek rd hayes va</p>
        <span className="flex items-center justify-between flex-wrap gap-1">
          <p>+17576894632</p>
          <p>28 june 2021</p>
        </span>
      </div>
      <div className="border-t py-10">
        <p className="font-bold mb-5">Price Details</p>
        <div className="flex items-center justify-between mb-3 text-sm">
          <p>Price</p>
          <p>$65</p>
        </div>
        <div className="flex items-center justify-between mb-3 text-sm">
          <p>Discount</p>
          <p className="text-green-700">-$12</p>
        </div>
        <div className="flex items-center justify-between mb-3 text-sm">
          <p>Delivery charges</p>
          <p className="text-red-700">+$10</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-3 text-sm font-bold border-t pt-5">
        <p>Total Amount</p>
        <p>$10</p>
      </div>
      <div className="flex items-center justify-between text-sm border-t pt-5 font-bold">
        <p>Payment mode</p>
        <p>UPI</p>
      </div>
    </div>
  );
};

export default OrderDetails;
