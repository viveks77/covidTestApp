import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [list, setList] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.covid19india.org/state_district_wise.json"
      );
      setList(response);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return list;
};
