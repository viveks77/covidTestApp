import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {withNavigation} from 'react-navigation';
import WorldSummaryTemplate from "./WorldSummaryTemplate";
import getWorldData from '../hooks/getWorldSummary';

const WorldSummary = ({navigation}) => {
  
    const worldData = getWorldData();
    if(!worldData){
        return null;
    }
    const countryData = worldData.reports[0].table[0];

    return(
    <TouchableOpacity  
        onPress={() => {navigation.navigate("World", {data : countryData})}}
        activeOpacity={1}
    >
    <WorldSummaryTemplate worldData={worldData.reports[0]}/>
    </TouchableOpacity>
    );
};

export default withNavigation(WorldSummary);
