import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/Foto.minha2.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>Olá, eu sou o Pedro!</Text>
      <Text style={styles.description}>
        Estudante de Ciências da Computação, Engenheiro, Ex-Militar, Músico, Cozinheiro, Pai de pet, Semi-Deus, Último herói da Terra.
      </Text>

      <View style={styles.links}>
        <Link href="/sobre" asChild>
          <Pressable style={styles.card}><Text style={styles.cardText}>Sobre Mim</Text></Pressable>
        </Link>
        <Link href="/academico" asChild>
          <Pressable style={styles.card}><Text style={styles.cardText}>Experiência Acadêmica</Text></Pressable>
        </Link>
        <Link href="/profissional" asChild>
          <Pressable style={styles.card}><Text style={styles.cardText}>Experiência Profissional</Text></Pressable>
        </Link>
        <Link href="/projetos" asChild>
          <Pressable style={styles.card}><Text style={styles.cardText}>Projetos</Text></Pressable>
        </Link>
        <Link href="/joguinho" asChild>
          <Pressable style={styles.card}><Text style={styles.cardText}>Joguinho</Text></Pressable>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
    backgroundColor: '#f1731f',
  },
  imageWrapper: {
    borderWidth: 4,
    borderColor: '#b90504',
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  links: {
    marginTop: 30,
    gap: 15,
    width: '80%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderColor: '#952517',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#952517',
    fontWeight: 'bold',
  },
});
