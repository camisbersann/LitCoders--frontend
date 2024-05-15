import { View, Text, TouchableOpacity, Image, ScrollView, Link, TextInput } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Cadastrese() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Cadastre-se</Text>
      <View style={styles.cardcadastro}>
        <TextInput style={styles.input} placeholder="Digite seu nome"  />
        <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
        <TextInput style={styles.input} placeholder="Digite sua data de nascimento" />
        <TextInput style={styles.input} placeholder="Digite seu CPF" />
        <TextInput style={styles.input} placeholder="Digite seu telefone" />
        <TextInput style={styles.input} placeholder="Digite seu email" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
        <TextInput style={styles.input} placeholder="Confirme sua senha" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text>Já possui uma conta? Clique aqui e faça seu login</Text>
      </ScrollView>
    </View>
  )
}