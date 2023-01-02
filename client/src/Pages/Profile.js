import React from "react";
import male from "../Assets/Male.png";
import female from "../Assets/Female.png";
import defaultUser from "../Assets/defaultUser.png";
import { useState } from "react";
import useStore from "../Store/useStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const Profile = () => {
  const { user, setUser } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const updateUser = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", user.userId), { name, gender, email });
      setUser((prev) => ({ ...prev, name, gender, email }));
      setDisabled(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const setDefault = () => {
    if (!user?._id) return navigate("/");
    setName(user?.name || "");
    setGender(user?.gender || "Male");
    setEmail(user?.email || "");
    setDisabled(true);
  };

  useEffect(() => {
    setDefault();
  }, []);

  return (
    <div className="w-[95%] max-w-[700px] mx-auto p-5 my-14 pt-14 pb-10 shadow-lg rounded-xl border">
      <img
        src={
          user?.gender === "Male"
            ? male
            : user?.gender === "Female"
            ? female
            : defaultUser
        }
        alt=""
        className="w-14 aspect-square block mx-auto"
      />
      <p className="w-fit mx-auto font-bold mt-2 text-xs">Hello,</p>
      <p className="w-fit mx-auto font-bold">{user?.name || "user"}</p>

      <form
        className="w-full max-w-[400px] mx-auto mt-10 text-sm"
        onSubmit={updateUser}
      >
        <p className="font-bold mb-2">Full Name</p>
        <input
          required
          disabled={disabled || loading}
          type="text"
          className="w-full border p-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="font-bold mt-5 mb-2">Gender</p>
        <div className=" text-gray-400 font-bold flex items-center justify-between">
          <span className="flex gap-1">
            <input
              disabled={disabled || loading}
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
              disabled={disabled || loading}
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
              disabled={disabled || loading}
              onChange={() => setGender("Prefer not to say")}
              className="w-[14px] h-[18px]"
              type="radio"
              id="Prefer not to say"
              name="Gender"
              checked={gender === "Prefer not to say" ? true : false}
            />
            <label htmlFor="Prefer not to say">Prefer not to say</label>
          </span>
        </div>
        <p className="font-bold mt-5 mb-2">Email</p>
        <input
          required
          disabled={disabled || loading}
          type="email"
          className="w-full border p-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="font-bold mt-5 mb-2">Contact Number</p>
        <input
          type="text"
          className="w-full border p-2 outline-none"
          disabled
          defaultValue={user?.contactNumber}
        />
        <button
          disabled={loading}
          type="submit"
          className={`mt-10 bg-[#FE5900] w-44 py-2 mx-auto font-bold text-white text-sm rounded ${
            disabled ? "hidden" : "block"
          } `}
        >
          {loading ? <PulseLoader color="#FFF" size={8} /> : "Save"}
        </button>
      </form>
      <button
        onClick={() => setDisabled(false)}
        type="button"
        className={`mt-10 bg-[#FE5900] w-44 py-2 mx-auto font-bold text-white text-sm rounded ${
          disabled ? "block" : "hidden"
        }`}
      >
        Edit
      </button>
      <p
        onClick={setDefault}
        className={`w-fit mx-auto mt-2 text-xs cursor-pointer font-bold ${
          disabled || loading ? "invisible" : "visible"
        }`}
      >
        Cancel
      </p>
    </div>
  );
};

export default Profile;
