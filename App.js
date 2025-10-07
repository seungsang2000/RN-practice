import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e2b497',
    }} >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} /> }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Your Favorites', drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} /> }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
          headerTitleAlign: "center"
        }}>


          <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{
            title: 'All Categories',
            headerShown: false
          }} />


          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
            headerRight: () => {
              return <Button title="Tap me!" onPress={() => { }} />
            },
            title: 'About the Meal'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});