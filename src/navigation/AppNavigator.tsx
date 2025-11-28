import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions, DefaultTheme as NavLight } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Card, Text, Button } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import SobreScreen from '../screens/SobreScreen';
import Header from '../components/Header';

type RootDrawerParamList = {
  Principal: undefined;
  Sobre: undefined;
};

type RootStackParamList = {
  Tabs: undefined;
  Detalhes: { from?: string } | undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator();

const navTheme = {
  ...NavLight,
  colors: {
    ...NavLight.colors,
    background: '#FAFAFA',
    card: '#FFFFFF',
    text: '#1F2937',
    border: '#E5E7EB',
  },
};

function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Home' ? 'home' : 'rss';
          return <Icon source={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Feed" component={FeedScreen} />
    </Tabs.Navigator>
  );
}

function StackPrincipal({ navigation }: any) {
  return (
    <>
      <Header title="Principal" navigation={navigation} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#2563EB',
          drawerStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Drawer.Screen
          name="Principal"
          component={StackPrincipal}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon source="view-dashboard" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon source="information-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
    gap: 16,
  },
});