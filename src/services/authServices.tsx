import apiService from "./apiServices";

const authAPI = "http://localhost:3000/auth";

const AuthServices = {
  // auth/sign-up/college
  sign_up: async (
    name: string,
    email: string,
    phoneNumber: string,
    password: string
  ) => {
    const data = { name, email, phoneNumber, password };
    return await apiService.request("POST", `${authAPI}/sign-up/college`, data);
  },

  //  auth/sign-in/college
  sign_in: async (email: string, password: string) => {
    const data = { email, password };
    return await apiService.request("POST", `${authAPI}/sign-in/college`, data);
  },

  //  auth/sign-out/college
  sign_out: async () => {
    localStorage.removeItem("user");
  },

  //  auth/forget-password/college
  forget_password: async (email: string) => {
    const data = { email };
    return await apiService.request(
      "POST",
      `${authAPI}/forget-password/college`,
      data
    );
  },

  //  auth/reset-password/college
  reset_password: async (newPassword: string, confirmPassword: string) => {
    const data = { newPassword, confirmPassword };
    return await apiService.request(
      "POST",
      `${authAPI}/reset-password/college`,
      data
    );
  },
};

export default AuthServices;
