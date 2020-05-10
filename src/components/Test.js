import React from 'react';
import {Text} from 'react-native';

const Test = (props) => {
    return(
    <Text>{props.data.TotalCases}</Text>
    )
}

export default Test;