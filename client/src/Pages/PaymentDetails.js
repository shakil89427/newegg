import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../Store/useStore";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Input from "../Components/Input/Input";

const PaymentDetails = () => {
  const { user, cart, setShowLoginSignup } = useStore();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [focused, setFocused] = useState({});
  const [priceData, setPriceData] = useState({});
  /* Form Data Start*/
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [pincode, setPinode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  /* Form Data End*/

  const updateOnDb = (paymentId) => {
    const userData = {
      fullName,
      email,
      contactNumber,
      pincode,
      city,
      state,
      country,
      address,
      landmark,
    };
    const orderData = {};
    // Save order to db
    setStep(100);
    window.scroll(0, 0);
  };

  const makePayment = () => {
    if (!user?._id) return setShowLoginSignup(true);
    // payment here
    updateOnDb(Math.random());
  };

  const calculate = (temp) => {
    if (!temp.length) return;
    let current = 0;
    let previous = 0;
    temp.forEach((product) => {
      current = current + product.inPrice * product.quantity;
      previous = previous + product.inStrikeThroughPrice * product.quantity;
    });
    setPriceData({
      price: previous,
      discount: previous - current,
      deliveryCharges: 10,
      totalAmount: current + 10,
    });
    setProducts(temp);
  };

  useEffect(() => {
    !location?.state && navigate("/");
  }, [location]);

  useEffect(() => {
    if (location?.state?.productId) {
      calculate([{ ...location?.state, quantity: 1 }]);
    }
  }, [location]);

  useEffect(() => {
    if (location?.state && !location?.state?.productId) {
      calculate(cart);
    }
  }, [cart, location]);

  useEffect(() => {
    user?.fullName && setFullName(user.fullName);
    user?.email && setEmail(user.email);
    user?.contactNumber && setContactNumber(user.contactNumber);
    user?.pincode && setPinode(user.pincode);
    user?.city && setCity(user.city);
    user?.state && setState(user.state);
    user?.country && setCountry(user.country);
    user?.address && setAddress(user.address);
    user?.landmark && setLandmark(user.landmark);
  }, [user]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] px-5 mx-auto py-20">
      {/* Left */}
      <div>
        {/* Step */}
        <div className="flex items-center justify-between relative font-medium w-[80%] mx-auto">
          <p className="w-10 h-10 border-2 rounded-full flex items-center justify-center border-black text-black relative bg-white">
            <span>1</span>
            <span className="absolute top-11">Address</span>
          </p>
          <p
            style={{
              color: step >= 50 ? "black" : "#a19f9fa6",
              borderColor: step >= 50 ? "black" : "#c7c5c577",
            }}
            className="w-10 h-10 border-2 rounded-full flex items-center justify-center relative bg-white"
          >
            <span>2</span>
            <span className="absolute top-11">Order</span>
          </p>
          <p
            style={{
              color: step === 100 ? "black" : "#a19f9fa6",
              borderColor: step === 100 ? "black" : "#c7c5c577",
            }}
            className="w-10 h-10 border-2 rounded-full flex items-center justify-center relative bg-white"
          >
            <span>3</span>
            <span className="absolute top-11">Payment</span>
          </p>
          <div className="absolute w-full h-[2px] bg-[#a19f9f3f] -z-20" />
          <div
            style={{ width: `${step}%` }}
            className="absolute h-[2px] bg-black -z-10 duration-150"
          />
        </div>
        {step === 0 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!isValidPhoneNumber(contactNumber)) {
                return alert("Invalid number");
              }
              setStep(50);
              window.scroll(0, 0);
            }}
          >
            <p className="font-semibold text-lg md:text-xl xl:text-2xl mt-20 mb-10">
              Contact Information
            </p>
            <div className="grid grid-cols-1 gap-5">
              <Input
                required={true}
                name={"name"}
                value={fullName}
                setValue={setFullName}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"Full name"}
                type={"text"}
              />
              <Input
                required={true}
                name={"email"}
                value={email}
                setValue={setEmail}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"Email address"}
                type={"email"}
              />
              <PhoneInput
                className="phoneinput border-2 h-11 p-2 overflow-hidden otpNumber"
                international
                defaultCountry={"IN"}
                countryCallingCodeEditable={false}
                value={contactNumber}
                onChange={setContactNumber}
              />
            </div>
            <p className="font-semibold text-lg md:text-xl xl:text-2xl mt-12 mb-10">
              Address Details
            </p>
            <div className="grid grid-cols-2 gap-5">
              <Input
                required={true}
                name={"pinCode"}
                value={pincode}
                setValue={setPinode}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"Pincode"}
                type={"text"}
              />
              <Input
                required={true}
                name={"city"}
                value={city}
                setValue={setCity}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"City"}
                type={"text"}
              />
              <Input
                required={true}
                name={"state"}
                value={state}
                setValue={setState}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"State"}
                type={"text"}
              />
              <Input
                required={true}
                name={"country"}
                value={country}
                setValue={setCountry}
                focused={focused}
                setFocused={setFocused}
                placeHolder={"Country"}
                type={"text"}
              />
              <div className="col-span-2">
                <Input
                  required={true}
                  name={"address"}
                  value={address}
                  setValue={setAddress}
                  focused={focused}
                  setFocused={setFocused}
                  placeHolder={"Address Line 1"}
                  type={"text"}
                />
              </div>
              <div className="col-span-2">
                <Input
                  required={false}
                  name={"landMark"}
                  value={landmark}
                  setValue={setLandmark}
                  focused={focused}
                  setFocused={setFocused}
                  placeHolder={"Landmark"}
                  type={"text"}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#FE5900] text-white py-3 mt-5 block ml-auto w-1/2 rounded-md font-bold"
            >
              Continue
            </button>
          </form>
        )}
        {step === 50 && (
          <div>
            <p
              onClick={makePayment}
              className="mt-20 mb-10 bg-[#FE5900] text-white py-3 text-center text-lg font-medium rounded-md cursor-pointer"
            >
              Checkout
            </p>
            <div className="flex items-center justify-between font-medium text-gray-500">
              <p>Deliver to:</p>
              <p
                onClick={() => {
                  setStep(0);
                  window.scroll(0, 0);
                }}
                className="border-2 px-3 py-1 rounded-md cursor-pointer"
              >
                Change
              </p>
            </div>
            <div>
              <p className="font-semibold my-5">{fullName}</p>
              <p className="max-w-[350px]">{`${address}, ${city}, ${state}, ${country} ${landmark} ${pincode}`}</p>
              <p className="mt-5">{contactNumber}</p>
              <p className="mt-2">{email}</p>
            </div>
            <div className="my-10 py-10 border-t border-b">
              {products.map((product) => (
                <div
                  key={product.productId}
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
                    <p className="lg:text-lg break-words mb-2">
                      {product.name}
                    </p>
                    <del className="text-gray-500">
                      ₹{product.inStrikeThroughPrice}
                    </del>
                    <p className="text-lg font-bold mt-1">₹{product.inPrice}</p>
                    <div className="flex items-center gap-5 mt-3">
                      <p className="text-gray-500 text-sm lg:text-md">
                        QTY-{product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-semibold">
              <p className="font-bold">Price Details</p>
              <div className="flex items-center justify-between mt-5">
                <p>Price</p>
                <p>₹{priceData?.price || 0}</p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <p>Discount</p>
                <p className=" text-green-700">-₹{priceData?.discount || 0}</p>
              </div>
              <div className="flex items-center justify-between mt-5 pb-10 border-b">
                <p>Delivery charges</p>
                <p className=" text-red-700">
                  +₹{priceData?.deliveryCharges || 0}
                </p>
              </div>

              <div className="flex items-center justify-between font-bold mt-5">
                <p>Total Ammount</p>
                <p>₹{priceData?.totalAmount || 0}</p>
              </div>

              <p
                onClick={makePayment}
                className="my-10 bg-[#FE5900] text-white py-3 text-center text-lg font-medium rounded-md cursor-pointer"
              >
                Checkout
              </p>
            </div>
          </div>
        )}
        {step === 100 && (
          <div className="mt-20">
            <p className="text-center text-lg font-medium">
              Order placed successfully
            </p>
            <p
              onClick={() => {
                navigate("/myorders");
              }}
              className="w-52 py-3 text-center border-2 border-[#FE5900] font-medium bg-[#FE5900] text-white mx-auto cursor-pointer rounded-md mt-5"
            >
              My Orders
            </p>
          </div>
        )}
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

export default PaymentDetails;
