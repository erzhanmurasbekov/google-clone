import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/customsearch/v1";

export const params = {
  key: "AIzaSyCmU9SAkbirwA5UVwtP6B0Iy51lkehahXc",
  cx: "95ac4812e68fc4988",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
