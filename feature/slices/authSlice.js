import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user =
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isNewpasswordSuccess: false,
  isVerified: false,
};

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Register user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

//verify email
export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (user, thunkAPI) => {
    try {
      return await authService.verifyEmail(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (user, thunkAPI) => {
    try {
      return await authService.resetPassword(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//reset password
export const otp = createAsyncThunk("auth/otp", async (email, thunkAPI) => {
  try {
    return await authService.otp(email);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//new password
export const newPassword = createAsyncThunk("auth/newPassword", async (newPass, thunkAPI) => {
  try {
    return await authService.newPassword(newPass);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isError = false),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      //resetpassword
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isNewpasswordSuccess = true;
        state.user = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isNewpasswordSuccess = false;
      })

      //resetpassword
      .addCase(otp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isVerified = true;
        state.user = action.payload;
      })
      .addCase(otp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.isVerified = false;
      })

      //newpassword
      .addCase(newPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(newPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isVerified = false;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
