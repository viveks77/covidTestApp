import { useState, useEffect } from "react";
import axios from "../api/getCountryData";

export default () => {
  const [worldData, setworldData] = useState(null);

  const getWorldData = async () => {
    try {
      const response = await axios.get("/AllReports");
      setworldData(response.data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getWorldData();
  }, []);

  return worldData;
};