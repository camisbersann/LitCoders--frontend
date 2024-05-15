import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import Title from '../../components/Title';

export default function Cadastrese() {
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const handleSenhaChange = (text) => {
    if (text.length <= 10) { 
      setSenha(text);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Cadastre-se</Text>
        <View style={styles.cardcadastro}>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
          <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            keyboardType="numeric"
            maxLength={14}
            onChangeText={(text) => {
            }}
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
          <TextInput style={styles.input} placeholder="Digite seu email" />
          <TouchableOpacity style={styles.button}>
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