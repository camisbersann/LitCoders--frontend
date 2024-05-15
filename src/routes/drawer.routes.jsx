import { createDrawerNavigator } from "@react-navigation/drawer";
import { ImageBackground, View, Text, Image } from 'react-native';

import Home from "../screens/Home";
import Cadastrese from "../screens/Cadastrese";
import CadastroLivro from "../screens/CadastroLivro";
import CadastroObraDeArte from '../screens/CadastroObraDeArte';
import Livro from '../screens/Livro';
import ArtesPlasticas from '../screens/ArtesPlasticas';
import SobreNos from '../screens/SobreNos';
import CustomDrawerContent from "../components/ImageDrawer";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: "#fff",
      width: 240,
      shadowColor: '#fff',
      shadowOpacity: 0.8,
      shadowRadius: 10,
       shadowOffset: { width: 3, height: 3},
      elevation: 20,
    }}
    screenOptions={{
      drawerActiveTintColor: "white",
      headerTintColor: "white",
      drawerLabelStyle: {
        color: "white",
      },
    }}
    >
      <Drawer.Screen name="Home" component={Home} 
       options={{
        title: "Home",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}
      />
      <Drawer.Screen name="Cadastrese" component={Cadastrese} 
      options={{
        title: "Cadastre-se",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}
      />
      <Drawer.Screen name="CadastroLivro" component={CadastroLivro}
      options={{
        title: "Cadastre seu Livro",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }} />
      <Drawer.Screen name="CadastroObraDeArte" component={CadastroObraDeArte} 
      options={{
        title: "Cadastre sua Obra de Arte",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}/>
      <Drawer.Screen name="Livro" component={Livro} 
      options={{
        title: "Livros",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}/>
      <Drawer.Screen name="ArtesPlasticas" component={ArtesPlasticas} 
      options={{
        title: "Artes Plásticas",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}/>
      <Drawer.Screen name="SobreNos" component={SobreNos} 
      options={{
        title: "Desenvolvedores",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 55,
                height: 55,
                marginLeft: 270,
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#04233f",
        },
        drawerStyle: {
          backgroundColor: "#04233f",
          textColor: "#fff",
        },
      }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;