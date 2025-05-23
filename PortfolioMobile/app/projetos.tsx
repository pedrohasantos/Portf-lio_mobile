import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Experiências Acadêmicas</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          1. <Text style={{ fontWeight: 'bold' }}>Projeto Clarear (não finalizado)</Text>
          {'\n'}
             <Text style={{ fontStyle: 'italic' }}>2024.2 - atualmente {'\n'}Projeto com o intuito de melhorar o banco de dados da ONG Pro-criança, deixando-o mais eficiente e intuitivo</Text>
             {'\n\n'}
          2. <Text style={{ fontWeight: 'bold' }}>Pomodojo</Text>
          {'\n'}
             <Text style={{ fontStyle: 'italic' }}>Cadeira de Engenharia de software{'\n'}Projeto que auxilia pessoas com deficit de atenção a estudar/, utilizando o metodo "Pomodoro" </Text>
        </Text>
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1731f',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff2d4',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff2d4',
    borderRadius: 16,
    padding: 20,
    borderColor: '#952517',
    borderWidth: 2,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#222',
    lineHeight: 22,
  },
backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#BC3722',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
