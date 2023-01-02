import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const MyOrders = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] px-5 mx-auto py-20">
      <div>
        <Outlet />
      </div>
      <div>
        <p className="flex items-center justify-center gap-5 text-lg font-semibold">
          <AiFillSafetyCertificate className="text-2xl" />
          <span>Safe and Secure Payments</span>
        </p>
        <p className="mt-20 text-center font-semibold text-gray-600">
          You're valuable to us!!
        </p>
      </div>
    </div>
  );
};

export default MyOrders;
