import { useEffect } from "react";
import useStore from "../Store/useStore";
import axios from "axios";

const useAuthCheck = () => {
  const { setUser, setAuthLoading } = useStore();

  const getUser = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return setAuthLoading(false);
      const { data } = await axios.get(
        "https://neweggserver.azurewebsites.net/api/user",
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      setUser(data.user);
      localStorage.setItem("accessToken", data.accessToken);
      setAuthLoading(false);
    } catch (err) {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
};

export default useAuthCheck;
