import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Icon, Button } from 'react-native-paper';

export default function FeedScreen({ navigation }: any) {
  const [facts, setFacts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadFacts() {
      try {
        const response = await fetch('https://catfact.ninja/facts?limit=10');
        const data = await response.json();
        setFacts(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadFacts();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Card>
          <Card.Content>
            <Text>Carregando fatos sobre gatos...</Text>
          </Card.Content>
        </Card>
      ) : (
        facts.map((item, index) => (
          <Card key={index} mode="elevated" style={{ marginBottom: 12 }}>
            <Card.Title title={`Fato #${index + 1}`} left={(props) => <Icon source="cat" {...props} />} />
            <Card.Content>
              <Text>{item.fact}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Detalhes', { from: 'Feed', fact: item.fact })}>
                Detalhes
              </Button>
            </Card.Actions>
          </Card>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FAFAFA' },
});
