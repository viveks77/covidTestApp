import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [list, setList] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://akashraj.tech/corona/api_india"
      );
      setList(response.data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return list;
};
