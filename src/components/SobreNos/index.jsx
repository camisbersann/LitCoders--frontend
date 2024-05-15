import React from "react";
import styles from "./styles.js";
import { View, Text, Image, ScrollView } from "react-native";

const SobreNos = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.sobreNos}>Sobre Nós</Text>

        <View style={styles.anaContainer}>
          <Image
            source={require("../../../assets/ana.jpeg")}
            style={styles.imagemMembro}
          />

          <Text style={styles.nomeMembro}>Ana Cavalcante</Text>
          <Text style={styles.anaBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>

        <View style={styles.andreyContainer}>
          <Image
            source={require("../../../assets/andrey.jpeg")}
            style={styles.imagemMembro}
          />
          <Text style={styles.nomeMembro}>Andrey Botero</Text>
          <Text style={styles.andreyBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>

        <View style={styles.camilaContainer}>
          <Image
            source={require("../../../assets/camila.jpeg")}
            style={styles.imagemMembro}
          />
          <Text style={styles.nomeMembro}>Camila Bersan</Text>
          <Text style={styles.camilaBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>

        <View style={styles.fabioContainer}>
          <Image
            source={require("../../../assets/fabio.jpeg")}
            style={styles.imagemMembro}
          />
          <Text style={styles.nomeMembro}>Fabio Junior</Text>
          <Text style={styles.fabioBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>
        <View style={styles.manuelaContainer}>
          <Image
            source={require("../../../assets/manu.jpeg")}
            style={styles.imagemMembro}
          />
          <Text style={styles.nomeMembro}>Manuela Liberato</Text>
          <Text style={styles.manuelaBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>
        <View style={styles.nicolyContainer}>
          <View styles={styles.imagemContainer}>
            <Image
              source={require("../../../assets/nicoly.jpeg")}
              style={styles.imagemMembro}
            />
          </View>
          <Text style={styles.nomeMembro}>Nicoly Val</Text>
          <Text style={styles.nicolyBio}>
            Tenho 17 anos, moro em Campinas-SP, e curso Desenvolvimento de
            Sistemas no SENAI Valinhos.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SobreNos;
