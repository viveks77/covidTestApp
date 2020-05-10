import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import WorldSummaryTemplate from "./WorldSummaryTemplate";
import getWorldData from '../hooks/getWorldSummary';

const WorldSummary = () => {
  
    const worldData = getWorldData();
    if(!worldData){
        return null;
    }
    
    const Data = {
        total : worldData.reports[0].cases,
        deaths : worldData.reports[0].deaths,
        recovered : worldData.reports[0].recovered
    }

    return <WorldSummaryTemplate worldData={Data}/>;
};

export default WorldSummary;
