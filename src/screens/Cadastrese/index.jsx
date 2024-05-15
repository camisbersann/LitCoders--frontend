import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Cadastrese() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre-se</Text>

    </View>
    </ScrollView>
  )
}