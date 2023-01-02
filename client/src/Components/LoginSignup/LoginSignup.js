import React, { useState } from "react";
import useStore from "../../Store/useStore";
import bg from "../../Assets/loginsignup/bg.png";
import cross from "../../Assets/cross.png";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

const LoginSignup = () => {
  const { setShowLoginSignup, setUser } = useStore();
  const [view, setView] = useState("email");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Male");
  const [tempToken, setTempToken] = useState(null);

  const sendOTP = async () => {
    try {
      if (!email) return;
      setLoading(true);
      await axios.get("https://neweggserver.azurewebsites.net/api/otp", {
        params: { email },
      });
      setLoading(false);
      setView("otp");
    } catch (err) {
      setLoading(false);
      alert(err?.message);
    }
  };

  const verifyOTP = async () => {
    if (otp.length !== 6) return;
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://neweggserver.azurewebsites.net/api/otp",
        {
          otp,
          email,
        }
      );
      if (data?.newUserToken) {
        setTempToken(data.newUserToken);
        setLoading(false);
        return setView("info");
      }
      setUser(data.user);
      localStorage.setItem("accessToken", data.accessToken);
      setShowLoginSignup(false);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  const updateUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://neweggserver.azurewebsites.net/api/user",
        {
          fullName,
          gender,
        },
        { headers: { authorization: `Bearer ${tempToken}` } }
      );
      setUser(data.user);
      localStorage.setItem("accessToken", data.accessToken);
      setShowLoginSignup(false);
    } catch (err) {
      setLoading(false);
      alert(err?.message);
    }
  };

  return (
    <>
      <div
        onClick={() => !loading && setShowLoginSignup(false)}
        className="fixed top-0 left-0 inset-0 bg-[#3d3c3c48] z-30"
      />
      <div className="z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[95%] max-w-[500px] lg:max-w-[800px] rounded-md grid grid-cols-3 lg:grid-cols-5 overflow-hidden">
        <img
          onClick={() => !loading && setShowLoginSignup(false)}
          src={cross}
          alt=""
          className="absolute top-4 right-4 w-5 cursor-pointer"
        />
        <div className="col-span-2 bg-[#FFF5EF] relative pt-14 pb-5 hidden lg:block">
          <div className="border-[50px] border-[#f7ebe3bb] rounded-full w-1/2 aspect-square absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative flex flex-col items-center justify-between h-full gap-28">
            <span>
              <p className="text-xl text-center font-bold">
                Trusted by 350+ brands
              </p>
              <p className="text-xs">
                Every purchase will be made with pleasure
              </p>
            </span>
            <p className="text-xs">Get access to your Orders and Cart</p>
            <img src={bg} alt="" className="w-full" />
          </div>
        </div>
        <div className="col-span-3 pt-14 pb-5">
          <div className="w-[80%] mx-auto">
            <p className="text-xl md:text-2xl font-bold">LOGIN | SIGNUP</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (loading) return;
                view === "email" && sendOTP();
                view === "otp" && verifyOTP();
                view === "info" && updateUser();
              }}
            >
              {view === "email" && (
                <>
                  <p className="mt-10 mb-2 text-gray-400 text-md">
                    Enter Your Email
                  </p>
                  <input
                    readOnly={loading}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-[#CBCACA] p-[10px] w-full outline-none rounded-md"
                  />
                </>
              )}
              {view === "otp" && (
                <>
                  <p className="mt-10 mb-2 text-gray-400 text-md">
                    Enter Otp here
                  </p>
                  <input
                    readOnly={loading}
                    required
                    value={otp}
                    onChange={(e) => {
                      const regex = /\D/g;
                      !regex.test(e.target.value) && setOtp(e.target.value);
                    }}
                    type="text"
                    className="border border-[#CBCACA] p-[10px] w-full outline-none rounded-md"
                  />
                </>
              )}
              {view === "info" && (
                <>
                  <p className="mt-10 mb-2 text-gray-400 text-md">Full Name</p>
                  <input
                    readOnly={loading}
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    className="border border-[#CBCACA] p-[10px] w-full outline-none rounded-md"
                  />
                  <p className="mt-5 mb-2 text-gray-400 text-md">Gender</p>
                  <div className="text-sm text-gray-400 font-bold flex items-center justify-between mt-2">
                    <span className="flex gap-1">
                      <input
                        onChange={() => setGender("Male")}
                        className="w-[14px] h-[18px]"
                        type="radio"
                        id="Male"
                        name="Gender"
                        checked={gender === "Male" ? true : false}
                        required
                      />
                      <label htmlFor="Male">Male</label>
                    </span>
                    <span className="flex gap-1">
                      <input
                        onChange={() => setGender("Female")}
                        className="w-[14px] h-[18px]"
                        type="radio"
                        id="Female"
                        name="Gender"
                        checked={gender === "Female" ? true : false}
                      />
                      <label htmlFor="Female">Female</label>
                    </span>
                    <span className="flex gap-1">
                      <input
                        onChange={() => setGender("Prefer not to say")}
                        className="w-[14px] h-[18px]"
                        type="radio"
                        id="Prefer not to say"
                        name="Gender"
                        checked={gender === "Prefer not to say" ? true : false}
                      />
                      <label htmlFor="Prefer not to say">
                        Prefer not to say
                      </label>
                    </span>
                  </div>
                </>
              )}
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-[#FE5900] text-white py-3 rounded-md font-bold mt-8"
              >
                {loading ? <PulseLoader color="#FFF" size={10} /> : "Submit"}
              </button>
              <div id="captcha"></div>
            </form>
            <p className="text-xs mt-5">
              By continuing you agree to our{" "}
              <span className="underline text-blue-700 cursor-pointer">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="underline text-blue-700 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
