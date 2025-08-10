import axios from "axios";

export interface CreatePreRegistrationData {
  name: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  degree: string;
}

const API_URL = import.meta.env.PUBLIC_API_URL;

export const createPreRegistration = async (
  data: CreatePreRegistrationData
) => {
  const res = await axios.post(`${API_URL}/api/pre-registration`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
