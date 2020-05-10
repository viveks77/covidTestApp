import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import {withNavigation} from 'react-navigation';
import WorldSummaryTemplate from "./WorldSummaryTemplate";
import getWorldData from '../hooks/getWorldSummary';
import { TouchableHighlight } from "react-native-gesture-handler";

const WorldSummary = ({navigation}) => {
  
    const worldData = getWorldData();
    if(!worldData){
        return null;
    }
    
    const Data = {
        total : worldData.reports[0].cases,
        deaths : worldData.reports[0].deaths,
        recovered : worldData.reports[0].recovered
    }

    const countryData = worldData.reports[0].table[0];

    return(
    <TouchableHighlight
        onPress={() => {navigation.navigate("World", {data : countryData})}}
        activeOpacity={0.0}
        underlayColor="transparent"
    >
    <WorldSummaryTemplate worldData={Data}/>
    </TouchableHighlight>
    );
};

export default withNavigation(WorldSummary);
