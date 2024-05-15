import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Divider } from '@rneui/themed';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/logo.png')} style={{ width: 120, height: 120 }} />
        </View>
      <DrawerItemList {...props} />
      <Divider orientation="horizontal" width={1} color="white" style={{borderBottomWidth: 1,  marginVertical: 10, width: 200, marginLeft: 30}} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;