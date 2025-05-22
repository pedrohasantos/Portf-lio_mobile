import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Sobre Mim</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Olá! Meu nome é Pedro e sou estudante de Ciências da Computação apaixonado por tecnologia e inovação.
          {'\n\n'}
          Tenho experiências variadas que vão desde Engenharia, vida militar e projetos pessoais com programação. Tenho hobbies voltados a atividades fisicas e ao ar livre, como Vôlei, trilhas e corrida.
          {'\n\n'}
          Ja fiz de tudo um pouco, ja fui chapeiro em um bar, músico solo e com banda, fiz voluntariado no exterior. E agora busco me profissionalisar mais nessa area de tecnologia.
          {'\n\n'}
          Sinta se livre para explorar o aplicativo e as informações contidas nele.
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
    color: '#eeccbb',
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
