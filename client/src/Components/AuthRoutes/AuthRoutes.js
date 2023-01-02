import useStore from "../../Store/useStore";

const AuthRoutes = ({ children }) => {
  const { authLoading } = useStore();
  if (authLoading) return null;
  return children;
};

export default AuthRoutes;
