import React from "react";
import { View, Text, StyleSheet, FlatList, Linking, TouchableOpacity } from "react-native";
import getNewsData  from '../hooks/getNewsSummary';
import NewsTemplate from '../components/NewsTemplate';

const News = () => {
  
  const response = getNewsData();
  if(!response){
    return null;
  }
  
  const data= response.articles;

  return (
    <View style={styles.container}>
      <Text style={styles.head}>News</Text>
        <FlatList 
          horizontal
          keyExtractor={item => item.url}
          data={data}
          renderItem={({item})=>{
            return(
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url)
                }}
                activeOpacity ={0.7}
              >
              <NewsTemplate data={item} />
              </TouchableOpacity>
            )
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    minHeight : 250
  },
  head: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
  }
});

export default News;
