import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './ui/screens/components/footer';
import Main from './ui/screens/main';
import News from './ui/screens/news';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
      <Footer></Footer>
    </NavigationContainer>
  );
}

