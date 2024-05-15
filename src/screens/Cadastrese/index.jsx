import { View, Text, TouchableOpacity, Image, ScrollView, Link,  } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Cadastrese() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>Cadastre-se</Text>
      <View style={styles.cardcadastro}>
        <Text style={styles.textButton}>Nome:</Text>
        <Text style={styles.textButton}>Sobrenome:</Text>
        <Text style={styles.textButton}>Data de Nascimento:</Text>
        <Text style={styles.textButton}>CPF:</Text>
        <Text style={styles.textButton}>Telefone:</Text>
        <Text style={styles.textButton}>Email:</Text>
        <Text style={styles.textButton}>Senha:</Text>
        <Text style={styles.textButton}>Confirme a senha:</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton2}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton2}>Voltar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}