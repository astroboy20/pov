import axios from "axios";

const REGISTER_URL = "https://api-cliqpod.koyeb.app/auth/signup";
const LOGIN_URL = "https://api-cliqpod.koyeb.app/auth/login";
const VERIFY_EMAIL_URL =
  "https://api-cliqpod.koyeb.app/auth/emailVerification/:token";

//register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//register user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = () => {
  typeof window !== "undefined" && localStorage.removeItem("user");
};

//verify email
const verifyEmail = async (token) => {
  try {
    const response = await axios.get(
      `${VERIFY_EMAIL_URL.replace(":token", token)}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const authService = {
  register,
  logout,
  login,
  verifyEmail,
};

export default authService;
