// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";

// const initialState = {
//   user: null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
//   isAuthenticated: false,
// };

// // Register user
// export const register = createAsyncThunk(
//   "auth/register",
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.error) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Login user
// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.error) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// // Logout user
// export const logout = createAsyncThunk("auth/logout", async () => {
//   return await authService.logout();
// });

// // Google login
// export const googleLogin = createAsyncThunk(
//   "auth/login_google",
//   async (_, thunkAPI) => {
//     try {
//       return await authService.login_google();
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.error) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Google login for invitee
// export const googleLogin_Invitee = createAsyncThunk(
//   "auth/login_google_invitee",
//   async (_, thunkAPI) => {
//     try {
//       return await authService.login_google_invitee();
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.error) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isError = false;
//       state.isSuccess = false;
//       state.isLoading = false;
//       state.message = "";
//       state.isAuthenticated = false;
//     },
//     setUser: (state, action) => {
//       state.isLoading = false;
//       state.user = { token: action.payload };
//       state.isSuccess = true;
//       state.isAuthenticated = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload || "Registration Failed";
//         state.user = null;
//       })

//       // Login
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.isAuthenticated = false;
//         state.user = null;
//       })

//       // Google login
//       .addCase(googleLogin.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(googleLogin.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(googleLogin.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload || "Google Login Failed";
//         state.user = null;
//       })

//       // Google login invitee
//       .addCase(googleLogin_Invitee.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(googleLogin_Invitee.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//       })
//       .addCase(googleLogin_Invitee.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload || "Google Login Failed";
//         state.user = null;
//       });
//   },
// });

// export const { reset, setUser } = authSlice.actions;
// export default authSlice.reducer;
const a=1