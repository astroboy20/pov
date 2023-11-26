import axios from "axios";

const REGISTER_URL = "https://api-cliqpod.koyeb.app/auth/signup";
const LOGIN_URL = "https://api-cliqpod.koyeb.app/auth/login";
const VERIFY_EMAIL_URL =
  "https://api-cliqpod.koyeb.app/auth/emailVerification/:token";
const RESET_PASSWORD = "https://api-cliqpod.koyeb.app/auth/reset-password";
const OTP = "https://api-cliqpod.koyeb.app/auth/confirm-otp";
const NEW_PASS = "https://api-cliqpod.koyeb.app/auth/setNewPassword";
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
//verify email
const resetPassword = async (email) => {
  const response = await axios.post(RESET_PASSWORD, email);

  return response.data;
};
//verify email
const otp = async (otp) => {
  const response = await axios.post(OTP, otp);

  return response.data;
};

//verify email
const newPassword = async (newPass) => {
  const response = await axios.post(OTP, newPass);

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  verifyEmail,
  resetPassword,
  otp,
  newPassword,
};

export default authService;
