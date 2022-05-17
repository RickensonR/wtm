import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList} from "react-native";
import Product from "../components/Product";
import SearchBar from "../components/Searchbar";
import TopBar from "../components/TopBar"
export default function Card (){

    
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Some example text for a post',
      user: "user1",
      profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
      mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      user: "user2",
      profilepic: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg",
      mainimg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      user: "user3",
      profilepic: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg",
      mainimg: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg"
    },
  ];

    return(
        <SafeAreaView style={styles.container}>
          <SearchBar/>
            <FlatList
                data={DATA}
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