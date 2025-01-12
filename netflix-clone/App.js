import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './ui/screens/components/footer';
import Main from './ui/screens/main';
import News from './ui/screens/news';
import User from './ui/screens/user';
import { Dimensions } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
    <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer >
      <AppNavigator />
      <Footer />
    </NavigationContainer>
  );
}

