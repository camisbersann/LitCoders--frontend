import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const cardData = [
  {
    name: 'Descubra Destinos Gastronômicos Exclusivos:',
    url: require('../../../assets/pratocomida.png'),
    descricao: 'Elite Chefs é mais do que um guia; é uma jornada gastronômica...'
  },
  {
    name: 'Curadoria de Especialistas:',
    url: require('../../../assets/cardapio.png'),
    descricao: 'Nossa equipe de especialistas em gastronomia trabalha...'
  },
  {
    name: 'Explore Diversidade de Sabores:',
    url: require('../../../assets/restaurante.png'),
    descricao: 'Do requinte clássico à vanguarda culinária, nosso guia...'
  },
  {
    name: 'Avaliações Autênticas:',
    url: require('../../../assets/medalha.png'),
    descricao: 'Para garantir sua confiança, o Elite Chefs oferece avaliações...'
  },
  {
    name: 'Planeje sua Próxima Experiência',
    url: require('../../../assets/maocomida.png'),
    descricao: 'Navegue pelo Elite Chefs para planejar sua próxima...'
  },
  {
    name: 'Junte-se à Comunidade Elite:',
    url: require('../../../assets/parceria.png'),
    descricao: 'Embarque nesta jornada gastronômica extraordinária com o...'
  },
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const PaginaSobre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSwiped = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const resetCarousel = () => {
    setCurrentIndex(0);
    swiperRef.current.jumpToCardIndex(0);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={cardData}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={card.url} style={styles.image} />
            <Text style={styles.title}>{card.name}</Text>
            <Text style={styles.description}>{card.descricao}</Text>
          </View>
        )}
        onSwiped={onSwiped}
        cardIndex={currentIndex}
        backgroundColor={'#4FD0E9'}
        stackSize={3}
      />
      {currentIndex === cardData.length && (
        <View style={styles.endMessage}>
          <Text style={styles.endText}>Obrigado por escolher a Elite Chefs</Text>
          <Button title="Recomeçar" onPress={resetCarousel} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.45,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  endMessage: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  endText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PaginaSobre;
