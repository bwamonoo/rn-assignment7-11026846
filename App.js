import { CartProvider } from './contexts/CartContext';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './navigation/DrawerNavigator';


const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <DrawerNavigator />
    </CartProvider>
  );
}