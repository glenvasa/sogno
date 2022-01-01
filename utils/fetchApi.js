import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "e6432cbb9bmsh214a6bc7706df30p105b5fjsnd5530e346af1",
    },
  });

  return data
};
