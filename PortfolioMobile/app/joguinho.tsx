import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';

export default function JoguinhoScreen() {
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  function iniciarNovoJogo() {
    setSecret(gerarSenha());
    setGuess('');
    setHistory([]);
    setGameOver(false);
  }

  function gerarSenha() {
    const digitos: number[] = [];
    while (digitos.length < 4) {
      const numero = Math.floor(Math.random() * 10);
      if (!digitos.includes(numero)) {
        digitos.push(numero);
      }
    }
    return digitos.join('');
  }

  function verificarTentativa(palpite: string, senha: string) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < palpite.length; i++) {
      if (palpite[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(palpite[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  }

  function handleSubmit() {
    if (gameOver) return;

    if (guess.length !== 4 || new Set(guess).size !== 4 || /\D/.test(guess)) {
      Alert.alert('Erro', 'Digite 4 dígitos únicos.');
      return;
    }

    const { bulls, cows } = verificarTentativa(guess, secret);
    const resultado = `Tentativa: ${guess} — ${bulls} Bulls, ${cows} Cows`;
    setHistory([resultado, ...history]);
    setGuess('');

    if (bulls === 4) {
      setGameOver(true);
      Alert.alert('Parabéns!', 'Você acertou a senha! Obrigado por jogar', [
        {
          text: 'Jogar novamente',
          onPress: iniciarNovoJogo,
        },
      ]);
    }
  }

  function revelarSenha() {
    Alert.alert('Senha revelada', `Você desistiu! A senha era: ${secret}`, [
      {
        text: 'Tentar novamente',
        onPress: iniciarNovoJogo,
      },
    ]);
    setGameOver(true);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton}>
        <Link href="/" style={styles.backText}>← Voltar à Home</Link>
      </TouchableOpacity>

      <Text style={styles.title}>Joguinho: Bulls and Cows</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite 4 dígitos únicos"
        keyboardType="number-pad"
        value={guess}
        editable={!gameOver}
        onChangeText={setGuess}
        maxLength={4}
      />

      <View style={styles.buttonGroup}>
        <Button title="Enviar" onPress={handleSubmit} disabled={gameOver} />
        <Button title="Revelar senha" onPress={revelarSenha} color="#b00020" />
      </View>

      <FlatList
        data={history}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item}</Text>
        )}
        style={styles.historyList}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1731f',
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    color: '#fff8e7',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  historyList: {
    marginTop: 10,
  },
  historyItem: {
    backgroundColor: '#eeccbb',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    fontSize: 16,
    color: '#2e1e0f',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 8,
  },
  backText: {
    color: '#fff8e7',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
