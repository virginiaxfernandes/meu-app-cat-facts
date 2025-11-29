import React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';  
import { DrawerNavigationProp } from '@react-navigation/drawer';  

interface HeaderProps {
  title: string;
  navigation: DrawerNavigationProp<any, any>; 
}

export default function Header({ title, navigation }: HeaderProps) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

