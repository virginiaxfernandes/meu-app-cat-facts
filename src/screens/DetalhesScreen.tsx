import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-paper';
import Header from '../components/Header';

export default function DetalhesScreen({ route, navigation }: any) {
  const from = route?.params?.from ?? '—';
  const fact = route?.params?.fact;

  return (
    <>
      <Header title="Detalhes" navigation={navigation} />

      <View style={styles.container}>
        <Card>
          <Card.Title
            title="Fato sobre Gato"
            left={({ size, ...rest }) => (
              <Icon source="cat" size={24} {...rest} />
            )}
          />

          <Card.Content>
            <Text>{fact ?? "Nenhum fato disponível."}</Text>
            <Text style={{ marginTop: 8 }}>Origem: {from}</Text>
          </Card.Content>

          <Card.Actions>
            <Button onPress={() => navigation.goBack()}>
              Voltar
            </Button>
          </Card.Actions>
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
