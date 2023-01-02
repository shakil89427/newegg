import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/firebaseConfig";
import { useEffect } from "react";

initializeApp(firebaseConfig);

const Store = () => {
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(true);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [latest, setLatest] = useState([]);
  const [latestIndex, setLatestIndex] = useState(0);
  const [trending, setTrending] = useState([]);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [popular, setPopular] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const result = JSON.parse(localStorage.getItem("cart"));
      setCart(result?.length ? result : []);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    user,
    setUser,
    authLoading,
    setAuthLoading,
    showLoginSignup,
    setShowLoginSignup,
    latest,
    setLatest,
    trending,
    setTrending,
    popular,
    setPopular,
    latestIndex,
    setLatestIndex,
    trendingIndex,
    setTrendingIndex,
    popularIndex,
    setPopularIndex,
    cart,
    setCart,
  };
};

export default Store;
