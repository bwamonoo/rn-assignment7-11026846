import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName="Home"
				
			>
				<Drawer.Screen name="Home" component={HomeScreen}/>
				<Drawer.Screen name="Cart" component={CartScreen} />
				<Drawer.Screen
				 name="ProductDetail" 
				 options={{ drawerLabel: () => null, title: null }} 
				 component={ProductDetailScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
  );
}
