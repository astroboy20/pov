import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useAuth = () => {
  const { user } = useSelector((state) => state.auth);
  const googleToken = typeof window !== localStorage.getItem(token)
  const [currentUser, setCurrentUser] = useState({});
  // console.log("hey",currentUser, user)
  console.log("hey",googleToken)
  useEffect(() => {
    if (user || googleToken) {
      setCurrentUser({user} || googleToken);
    } else {
      setCurrentUser(null);
    }
  }, [user, googleToken]);
  return { currentUser };
};

export  {useAuth};
