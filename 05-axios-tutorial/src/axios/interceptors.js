import axios from "axios";

const authFetch1 = axios.create({
  baseURL: "https://www.course-api.com",
});

authFetch1.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch1.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
      return Promise.reject;
    }
  }
);

export default authFetch1;
