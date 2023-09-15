import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMzMTAzNzRhODQ0M2Q4YWVmY2RlMWQwNWRhYjNhZSIsInN1YiI6IjY0YzlmOWUzMGI3NGU5MDE0ZDdmZmMyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VomutIVA7vmTZlkHRNS6tsE2YD6sOWN1jsMue9NRBcE";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (endpoint, params) => {
  try {
    const { data } = await axios.get(BASE_URL + endpoint, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
