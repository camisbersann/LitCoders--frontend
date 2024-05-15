import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function CadastroObraDeArte() {
  return (
    <View style={styles.container}>
      <Title title={"Cadastre sua Obra de Arte"}/>
    </View>
  )
}