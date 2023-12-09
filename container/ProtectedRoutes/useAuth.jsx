import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { user } = useSelector((state) => state.auth);
  const googleToken = typeof window !== "undefined" && localStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else if (googleToken) {
      setCurrentUser({ token: googleToken }); 
    } else {
      setCurrentUser(null);
    }
  }, [user, googleToken]);

  return { currentUser };
};

export default useAuth;
