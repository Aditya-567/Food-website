import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, incrementQuantity, decrementQuantity, removeItem }) => {
    return (
        <div className="p-4">
            <Cart
                cartItems={cartItems}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItem={removeItem}
            />
        </div>
    );
};

export default CartPage;
