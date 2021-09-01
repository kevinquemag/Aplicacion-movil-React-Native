import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  DetailsScreen,
  MapsScreen,
  SettingsScreen,
  FavouritesScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { RestaurantContextProvider } from '../context/restaurant/restaurant.context';
import { LocationContextProvider } from '../context/locations/location.context';
import { FavouritesContextProvider } from '../context/favourites/favourites.context';


const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#04009A',
        inactiveTintColor: '#687980',
      }}>
      {/* home screen */}
      <AppTabs.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      {/* pantalla mapas */}
      <AppTabs.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="map-outline" size={size} color={color} />
          ),
        }}
      />

      {/* pantalla de favoritos */}
      <AppTabs.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <AppTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <AppTabsScreen />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
