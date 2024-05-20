import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import Title from '../../components/Title';

export default function Cadastrese() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSenhaChange = (text) => {
    if (text.length <= 10) {
      setSenha(text);
    }
  };

  const handleTelefoneChange = (text) => {
    text = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (text.length > 5) {
      text = text.slice(0, 5) + '-' + text.slice(5, 9); // Adiciona o traço após o quinto dígito
    }
    setTelefone(text);
  };

  const handleCadastro = () => {
    if (nome.trim() === '' || senha.trim() === '' || telefone.trim() === '' || email.trim() === '') {
      // Verifica se algum campo está vazio
      alert('Por favor, preencha todos os campos.');
    } else if (senha.length < 6 || senha.length > 10) {
      // Verifica se a senha tem entre 6 e 10 caracteres
      alert('A senha deve ter entre 6 e 10 caracteres.');
    } else if (telefone.length !== 10) {
      // Verifica se o telefone tem 10 caracteres (incluindo o traço)
      alert('O telefone deve ter 10 dígitos.');
    } else {
      // Se todos os campos estiverem preenchidos e dentro dos requisitos, prossegue com o cadastro
      alert('Cadastro realizado com sucesso!');
      // Aqui você pode implementar a lógica para enviar os dados para o servidor ou fazer outras ações necessárias
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Cadastre-se</Text>
        <View style={styles.cardcadastro}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            onChangeText={setNome}
            value={nome}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            keyboardType="numeric"
            maxLength={10} // Limita o número de caracteres a 10 (9 números + 1 traço)
            onChangeText={handleTelefoneChange}
            value={telefone}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Digite sua senha (max. 10 caracteres)"
              secureTextEntry={secureTextEntry}
              onChangeText={handleSenhaChange}
              value={senha}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={toggleSecureEntry}>
              <Ionicons name={secureTextEntry ? 'eye' : 'eye-off'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={setEmail}
            value={email}
          />
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Já possui uma conta?</Text>
        <Text style={styles.text2}>Clique aqui e faça seu login!</Text>
      </ScrollView>
    </View>
  );
}