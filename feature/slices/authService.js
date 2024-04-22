import axios from "axios";

const REGISTER_URL = "https://api-cliqpod.koyeb.app/auth/signup";
const LOGIN_URL = "https://api-cliqpod.koyeb.app/auth/login";
const GOOGLE_URL = "https://api-cliqpod.koyeb.app/auth/google";
const VERIFY_EMAIL_URL =
  "https://api-cliqpod.koyeb.app/auth/emailVerification/";
const RESET_PASSWORD = "https://api-cliqpod.koyeb.app/auth/reset-password";
const OTP = "https://api-cliqpod.koyeb.app/auth/confirm-otp";
const NEW_PASS = "https://api-cliqpod.koyeb.app/auth/setNewPassword";

//register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);
  return response.data;
};

//register user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  return response.data;
};

const login_google = async () => {
  window.location.href = "https://api-cliqpod.koyeb.app/auth/google";
};

//logout user
const logout = () => {
  typeof window !== "undefined" && localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  login_google,
};

export default authService;
