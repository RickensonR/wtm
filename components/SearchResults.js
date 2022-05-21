import { SafeAreaView, Text, FlatList } from 'react-native';
import Post from "../components/Post";

export default function SearchResults({ navigation, route }) {
    const { searchResults } = route.params;

    return (
        <SafeAreaView>
            {searchResults.length === 0 ?
            <Text>[TODO] Hint goes here</Text> :
            <FlatList
                data={searchResults}
                renderItem = { ({ item }) => (<Post post={item}/> )}
                keyExtractor={item => item.id}
            />}
        </SafeAreaView>
    );
}