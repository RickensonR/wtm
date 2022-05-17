import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from "@react-navigation/native"

import Funk from "../screens/Funk";

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Funk} />
        <Tab.Screen name="Settings" component={Funk} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}