import { useState, useEffect } from "react";
import axios from "../api/getCountryData";

export default () => {
  const [countryData, setCountryData] = useState(null);

  const getCountrytData = async () => {
    try {
      const response = await axios.get("/IndiaCasesByStates");
      setCountryData(response.data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getCountrytData();
  }, []);

  return countryData;
};
