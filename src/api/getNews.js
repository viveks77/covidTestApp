import axios from "axios";

const apiKey = '2010923677e5403da7ca027a0eb66e29'

export default axios.create({
  baseURL: `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`
});
