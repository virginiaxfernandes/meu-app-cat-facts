import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-paper';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card mode="elevated">
        <Card.Title title="Home" left={(props) => <Icon source="home" {...props} />} />
        <Card.Content>
          <Text>Bem-vindo! Esta é a aba Home.</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Detalhes', { from: 'Home' })}>
            Ir para Detalhes
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FAFAFA', gap: 16 },
});