import { CartProvider } from './contexts/CartContext';
import DrawerNavigator from './navigation/DrawerNavigator';


export default function App() {
  return (
    <CartProvider>
      <DrawerNavigator />
    </CartProvider>
  );
}