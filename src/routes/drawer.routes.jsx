import { createDrawerNavigator } from "@react-navigation/drawer";

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
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
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