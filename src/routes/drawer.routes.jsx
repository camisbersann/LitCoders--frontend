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
      <Drawer.Screen name="Cadastrese" component={Cadastrese} />
      <Drawer.Screen name="CadastroLivro" component={CadastroLivro} />
      <Drawer.Screen name="CadastroObraDeArte" component={CadastroObraDeArte} />
      <Drawer.Screen name="Livro" component={Livro} />
      <Drawer.Screen name="ArtesPlasticas" component={ArtesPlasticas} />
      <Drawer.Screen name="SobreNos" component={SobreNos} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;