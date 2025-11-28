import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon } from 'react-native-paper';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Sobre o App" left={(props) => <Icon source="information" {...props} />} />
        <Card.Content>
          <Text>Exemplo simples com Paper + Drawer + Tabs + Stack consumindo Cat Facts API.</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FAFAFA' },
});