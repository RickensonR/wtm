import { useState, useRef, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

import TabContainer from './components/TabContainer.js';
import SearchResults from "./components/SearchResults.js";
import DATA from "./data/PostData";

const Stack = createStackNavigator();
const SECRET_PHRASE = "good vibes";

function HomeScreen({ navigation }) {
  const [searchString, setSearchString] = useState("");
  const searchBar = useRef(null);
  const isVisible = useIsFocused();

  useEffect(() => {
    searchBar.current.clear();
  }, [isVisible]);
  
  const updateSearch = (newString) => {
    setSearchString(newString);
  };

  const searchPosts = (item) => {
    const filteredPosts = DATA.allData.filter(post => {
      let postLowercase = post.title.toLowerCase();
      let searchTermLowercase = item.toLowerCase();
      return postLowercase.indexOf(searchTermLowercase) > -1;
    });
    return filteredPosts;
  };

  const showSearchResults = () => {
    let searchParam = [];
    if (searchString.toLowerCase() === SECRET_PHRASE) {
      searchParam = searchPosts(searchString);
    }
    navigation.navigate("Search Results", {
      searchResults: searchParam,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
        ref={searchBar}
        placeholder="What's the secret phrase?"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        onChangeText={updateSearch}
        onSubmitEditing={showSearchResults}
        value={searchString} />
      <TabContainer/>
    </SafeAreaView>
  );
} 

export default function App() {
  // have a hint for incorrect searches
  // secret phrase - good vibes

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search Results" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  searchInputContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
  },
});
