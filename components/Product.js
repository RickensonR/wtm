import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList, Image} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5'
import { Dimensions } from 'react-native';


export default function Product({product}){


    const {title, id,user, profilepic, mainimg} = product
    const win = Dimensions.get('window');
    const ratio = win.width / 549;

    return(
        <SafeAreaView style = {styles.container}>

            <View style = {styles.userBar}>
                <Image source = {{uri: profilepic}}  style = {{ width: 50, height: 50, borderRadius: 100}}/>
                <Text style = {styles.user}>{user}</Text>
            </View>
            
            <Text style = {styles.title}>
                {title}
            </Text>

            <Image source = {{uri: mainimg}} style = {{ width: win.width, height: 362 * ratio}}/>

            <View style = {styles.bottombuttons}> 
                <View style = {{width: 100, flexDirection: "row", justifyContent: "space-evenly" }}>
                <MaterialCommunityIcons name = "arrow-up-bold-outline" size = {30} color = "black" />
                <MaterialCommunityIcons name = "arrow-down-bold-outline" size = {30} color = "black" />
                </View>
               
                <View style = {{width: 100}}> 
                <MaterialCommunityIcons name = "comment-outline" size = {30} color= "black"/>
                </View>

                <Feather name = "share" size = {30} color = "black"/>

            </View>
            


        </SafeAreaView>

    )
}

const styles = StyleSheet.create(
    {
        bottombuttons: {
            width: 350,
            backgroundColor: "white",
            flexDirection: "row", 
            justifyContent: "space-between",
            height: 40,
            borderColor: "green",
            borderBottomColor: "red"

        },

        title: {
            margin: 5,
            color: "black",
            fontWeight: "bold"

        },
        container: {
            
            backgroundColor: "white",
            //width: win.width,
            height: 400,
            overflow: "hidden",
            borderColor: "red",
            marginBottom: 10

        }, 
        userBar: {
            margin: 5,
            width: 100,
            flexDirection: "row", 
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white"
            

        }, 
        user: {
            fontWeight: "bold",
            color: "black"
        }
    }
)