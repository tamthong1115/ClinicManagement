import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const createClinic = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/clinic-owner/`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data.success) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateClinic = async (formData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/clinic-owner/:clinicId`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteClinic = async (formData) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/clinic-owner/:clinicId`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
