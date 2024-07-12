import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CustomHeader from '../components/CustomHeader';
import CustomDrawerContent from '../components/CustomDrawerContent';
import ProductDetailScreen from '../screens/ProductDetailScreen';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName="Home"
				screenOptions={{
					header: (props) => <CustomHeader {...props} />,
				}}
				drawerContent={ (props) => <CustomDrawerContent {...props} />}
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
