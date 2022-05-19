import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList} from "react-native";
import Product from "../components/Product";

export default function Card({ data }) {
    return(
        <SafeAreaView style={styles.container}>
          <FlatList
              data={data}
              renderItem = { ( { item } ) => (<Product product = {item}/> )}
              keyExtractor={item => item.id}
          />
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3"
  }

})