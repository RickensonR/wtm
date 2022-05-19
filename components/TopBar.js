import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native"
import Funk from "../screens/Funk";

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
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

  return (
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="#finals"
              children={()=><Funk data={DATA}/>} />
            <Tab.Screen name="#frosh" component={Funk} />
            <Tab.Screen name="#darty" component={Funk} />
            <Tab.Screen name="#spring" component={Funk} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}