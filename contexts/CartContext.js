import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function loadCartItems() {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems !== null) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Failed to load cart items', error);
      }
    }

    loadCartItems();
  }, []);

  const addToCart = async (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart items', error);
    }
  };

  const removeFromCart = async (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart items', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
