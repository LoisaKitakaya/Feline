import { createSlice } from "@reduxjs/toolkit";

export const securityReducer = createSlice({
  name: "security",
  initialState: {
    twoFactorAuthentication: localStorage.getItem("2FA_Enabled")
      ? localStorage.getItem("2FA_Enabled")
      : false,
    oneTimePassword: localStorage.getItem("OTP_Verified")
      ? localStorage.getItem("OTP_Verified")
      : "Unverified",
  },
  reducers: {
    enable2FA: (state) => {
      localStorage.setItem("2FA_Enabled", true);

      state.twoFactorAuthentication = localStorage.getItem("2FA_Enabled");
    },
    disable2FA: (state) => {
      localStorage.removeItem("2FA_Enabled");
      localStorage.removeItem("OTP_Verified");

      state.twoFactorAuthentication = false;
      state.oneTimePassword = "Unverified";
    },
    verifyOTP: (state, action) => {
      if (action.payload.verifyOTP === "Your account has been verified") {
        localStorage.setItem("OTP_Verified", "Verified");

        state.oneTimePassword = localStorage.getItem("OTP_Verified");
      } else {
        localStorage.removeItem("OTP_Verified");

        state.oneTimePassword = "Unverified";
      }
    },
  },
});

export const { enable2FA, disable2FA, verifyOTP } = securityReducer.actions;
export default securityReducer.reducer;
