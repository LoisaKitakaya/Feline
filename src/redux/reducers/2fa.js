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
    canProceed: localStorage.getItem("proceed_from_login")
      ? localStorage.getItem("proceed_from_login")
      : false,
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
    verifyOtpCode: (state, action) => {
      if (action.payload.verifyOTP === "Your account has been verified") {
        localStorage.setItem("OTP_Verified", "Verified");

        state.oneTimePassword = localStorage.getItem("OTP_Verified");
      } else {
        localStorage.removeItem("OTP_Verified");

        state.oneTimePassword = "Unverified";
      }
    },
    confirmLogin: (state) => {
      localStorage.setItem("proceed_from_login", true);

      state.canProceed = true;
    },
    revokeLogin: (state) => {
      localStorage.removeItem("proceed_from_login");

      state.canProceed = false;
    },
  },
});

export const {
  enable2FA,
  disable2FA,
  verifyOtpCode,
  confirmLogin,
  revokeLogin,
} = securityReducer.actions;
export default securityReducer.reducer;
