import axios from "axios";

const API = {
  call: function () {
    return axios.create({
      baseURL: "https://api.themoviedb.org",
    });
  },
};

export default API;
