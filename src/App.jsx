import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReviewComponent from './components/ReviewComponent';
import CartPage from './pages/CartPage';
import FoodListPage from './pages/FoodListPage';
import TimerPage from './pages/TimerPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<FoodListPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/review" element={<ReviewComponent />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;