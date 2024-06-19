// import Ionicons from "@expo/vector-icons/Ionicons";
// import { StyleSheet } from "react-native";

// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import T2 from "@/components/tNav/T2";
// import THistory from "@/components/tNav/THistory";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// const Tab = createMaterialTopTabNavigator();

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      
//     >
//       {/* <NavigationContainer> */}

//       <Tab.Navigator>
        
//         <Tab.Screen name="T" component={T2} />
//         <Tab.Screen name="TH" component={THistory} />
//       </Tab.Navigator>
//       {/* </NavigationContainer> */}
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8,
//   },
// });






import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import T2 from '@/components/tNav/T2';
import THistory from '@/components/tNav/THistory';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const Tab = createMaterialTopTabNavigator();

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer> */}
      <Tab.Navigator>
        <Tab.Screen name="লেনদেন" component={T2} />
        <Tab.Screen name="TH" component={THistory} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff', // Example background color
  },
});
