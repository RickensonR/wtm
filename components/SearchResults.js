import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import Post from "../components/Post";

export default function SearchResults({ navigation, route }) {
    const { searchResults } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            {searchResults.length === 0 ?
            <Text style={styles.hint}>Everybody who's going to the party knows the secret phrase...🤫✉️ {'\n\n'}See what people are posting!</Text> :
            <FlatList
                data={searchResults}
                renderItem = { ({ item }) => (<Post post={item}/> )}
                keyExtractor={item => item.id}
            />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hint: {
        width: '90%',
        textAlign: 'center',
        fontSize: 30,
    }
  })