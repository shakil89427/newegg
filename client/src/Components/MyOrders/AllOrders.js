import React from "react";

const AllOrders = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-10">
        <p className="text-lg lg:text-xl xl:text-2xl font-bold">My Orders</p>
        <p className="text-sm lg:text-md xl:text-lg">(2 Items)</p>
      </div>
      <div className="p-2 lg:p-5 pb-8 mb-8 border grid grid-cols-3 gap-5 rounded-xl shadow-sm">
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
          <p className="text-lg font-bold mt-1">$1200</p>
          <p className="text-sm my-2">
            Order Placed on :{" "}
            <span className="text-gray-400">3 October 2020</span>
          </p>
          <p className="text-sm">
            Ship to : <span className="text-gray-400">someone</span>
          </p>
        </div>
      </div>
      <div className="p-2 lg:p-5 pb-8 mb-8 border grid grid-cols-3 gap-5 rounded-xl shadow-sm">
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
          <p className="text-lg font-bold mt-1">$1200</p>
          <p className="text-sm my-2">
            Order Placed on :{" "}
            <span className="text-gray-400">3 October 2020</span>
          </p>
          <p className="text-sm">
            Ship to : <span className="text-gray-400">someone</span>
          </p>
        </div>
      </div>
      <div className="p-2 lg:p-5 pb-8 mb-8 border grid grid-cols-3 gap-5 rounded-xl shadow-sm">
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
          <p className="text-lg font-bold mt-1">$1200</p>
          <p className="text-sm my-2">
            Order Placed on :{" "}
            <span className="text-gray-400">3 October 2020</span>
          </p>
          <p className="text-sm">
            Ship to : <span className="text-gray-400">someone</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
