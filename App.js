import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "./src/screens/HomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import RegisterScreen from "./src/screens/RegisterScreen"
import SuccessRegister from "./src/screens/SuccessRegister"


const { Navigator, Screen } = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <Navigator initialRouteName="HomeScreen">

          <Screen name="Home" component={HomeScreen} options={{headerShown : false }} />
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Register" component={RegisterScreen} />
          <Screen name="SuccessRegister" component={SuccessRegister} options={{headerShown : false }} />

        </Navigator>

    </NavigationContainer>

    </SafeAreaProvider>
    
  );
}

export default App