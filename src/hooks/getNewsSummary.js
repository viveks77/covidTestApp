import { useState, useEffect } from "react";
import axios from "../api/getNews";

export default () => {
  const [newsData, setNewsData] = useState(null);

  const getNewsData = async () => {
    try {
      const response = await axios.get();
      setNewsData(response.data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return newsData;
};
