import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon } from 'react-native-paper';
import Header from '../components/Header';

export default function SobreScreen({ navigation }: any) {
  return (
    <>
      <Header title="Sobre" navigation={navigation} />

      <View style={styles.container}>
        <Card>
          <Card.Title
            title="Sobre o App"
            left={({ size, ...rest }) => (
              <Icon source="information" size={24} {...rest} />
            )}
          />

          <Card.Content>
            <Text>
              Este app usa React Native Paper, navegação por Drawer + Stack + Tabs
              e consome a API Cat Facts.
            </Text>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
    gap: 16,
  },
});
