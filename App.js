import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useMontserratAlternates, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import BottomTabBar from './src/Navigator/bottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [montserratLoaded] = useMontserratAlternates({
    MontserratAlternates_700Bold,
  });

  if (!latoLoaded || !montserratLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={BottomTabBar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
