import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useAuth = () => {
  const { user } = useSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState({});
  console.log("hey",currentUser, user)
  useEffect(() => {
    if (user) {
      setCurrentUser({user});
    } else {
      setCurrentUser(null);
    }
  }, [user]);
  return { currentUser };
};

export  {useAuth};
