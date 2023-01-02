import React from "react";
import useStore from "../../Store/useStore";
import useAuthCheck from "../../Hooks/useAuthCheck";
import LoginSignup from "../LoginSignup/LoginSignup";
import PulseLoader from "react-spinners/PulseLoader";

const Activity = () => {
  const { showLoginSignup, authLoading } = useStore();
  useAuthCheck();

  return (
    <>
      {authLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[9999999999]">
          <PulseLoader color="#FE5900" size={30} />
        </div>
      )}
      {showLoginSignup && <LoginSignup />}
    </>
  );
};

export default Activity;
