import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import TopBar from './components/TopBar.js';
// import SearchBar from "./components/Searchbar";
import Funk from "./screens/Funk.js"
import { SearchBar } from 'react-native-elements';
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const updateSearch = (searchStr) => {
    setSearch(searchStr);
  };

  // have a hint for incorrect searches
  // secret phrase - good vibes

  return (
      <SafeAreaView style={styles.container}>
        <SearchBar 
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search} />
        <TopBar/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
