import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Funk from "../screens/Funk";
import DATA from "../data/PostData";

const Tab = createMaterialTopTabNavigator();

export default function TabContainer() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="#finals"
        children={()=><Funk data={DATA.finalsData}/>} />
      <Tab.Screen
        name="#frosh"
        children={()=><Funk data={DATA.froshData}/>} />
      <Tab.Screen
        name="#darty"
        children={()=><Funk data={DATA.dartyData}/>} />
      <Tab.Screen
        name="#spring"
        children={()=><Funk data={DATA.springData}/>} />
    </Tab.Navigator>
  );
}