import React from "react";
import { SafeAreaView, StyleSheet, FlatList} from "react-native";
import Post from "../components/Post";

export default function Funk({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem = { ({ item }) => (<Post post={item}/> )}
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