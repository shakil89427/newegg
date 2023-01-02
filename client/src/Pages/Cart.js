import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import cross from "../Assets/cross.png";
import useStore from "../Store/useStore";

const Cart = () => {
  const { cart, setCart } = useStore();
  const navigate = useNavigate();

  const removeProduct = (_id) => {
    try {
      const filtered = cart.filter((item) => item?._id !== _id);
      setCart(filtered);
      localStorage.setItem("cart", JSON.stringify(filtered));
    } catch (err) {}
  };

  if (!cart.length) {
    return <p className="text-center mt-10">No product added to cart</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] px-5 mx-auto py-20">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <p className="text-lg lg:text-xl xl:text-2xl font-bold">My Cart</p>
          <p className="text-sm lg:text-md xl:text-lg">({cart.length} Items)</p>
        </div>
        {cart.map((product) => (
          <div
            key={product._id}
            className="p-2 lg:p-5 pb-8 mb-8 border grid grid-cols-3 gap-5 rounded-xl shadow-sm"
          >
            <div className="w-full aspect-square">
              <img
                src={product.blob[0].url}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <p className="lg:text-lg break-words mb-2">{product.name}</p>
              <del className="text-gray-500">
                ₹{product.inStrikeThroughPrice}
              </del>
              <p className="text-lg font-bold mt-1">₹{product.inPrice}</p>
              <div className="flex items-center gap-5 mt-3">
                <p className="text-gray-500 text-sm lg:text-md">
                  QTY-{product.quantity}
                </p>
                <div
                  onClick={() => removeProduct(product._id)}
                  className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-md cursor-pointer select-none"
                >
                  <img src={cross} alt="" className="w-3" />
                  <p className="text-sm">Remove</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p
          onClick={() => navigate("/paymentdetails", { state: true })}
          className="bg-[#FE5900] mt-10 text-center p-3 rounded-md text-white font-bold cursor-pointer select-none"
        >
          Place Order
        </p>
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

export default Cart;
