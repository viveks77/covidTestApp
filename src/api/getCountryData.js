import axios from "axios";

export default axios.create({
  baseURL: "https://covid19api.io/api/v1",
});
