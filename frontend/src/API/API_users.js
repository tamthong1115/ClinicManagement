import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/register`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const validateTokenUser = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/auth/validate-token`, {
    withCredentials: true,
  });

  if (!response.data.success) {
    return response.data;
  }

  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/users/me`, {
    withCredentials: true,
  });

  return response.data;
};

export const signOut = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/auth/logout`, {
    withCredentials: true,
  });

  return response.data;
};
