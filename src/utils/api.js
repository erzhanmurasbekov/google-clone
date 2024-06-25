import axios from "axios";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const params = {
  key: import.meta.env.VITE_APP_KEY,
  cx: import.meta.env.VITE_APP_CX,
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
