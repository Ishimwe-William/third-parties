import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from "./src/screens/HomeScreen";
import {SignupScreen} from "./src/screens/SignupScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
                              screenOptions={{
                                  headerShown: false,
                              }}>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Signup" component={SignupScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}