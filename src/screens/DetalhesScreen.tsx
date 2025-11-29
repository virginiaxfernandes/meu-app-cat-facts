import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DetalhesScreenRouteProp = RouteProp<any, 'Detalhes'>;

interface DetalhesScreenProps {
  route: DetalhesScreenRouteProp;
  navigation: DrawerNavigationProp<any, any>;
}

export default function DetalhesScreen({ route, navigation }: DetalhesScreenProps) {
  const from = route?.params?.from ?? '—';
  const fact = route?.params?.fact ?? '';

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Detalhes" left={(props) => <Icon source="file-document" {...props} />} />
        <Card.Content>
          <Text>Você veio de: {from}</Text>
          {fact ? <Text>Fato: {fact}</Text> : null}
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FAFAFA' },
});
