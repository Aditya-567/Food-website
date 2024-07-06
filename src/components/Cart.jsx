import { faChevronLeft, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeItem }) => {
    const navigate = useNavigate();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryCharge = 1.00;
    const tax = 0.50;
    const grandTotal = total + deliveryCharge + tax;

    const handleCheckout = () => {
        const maxTime = Math.max(...cartItems.map(item => parseInt(item.time)));
        navigate('/timer', { state: { maxTime } });
    };

    // Updated decrementQuantity function to also remove the item if quantity is zero
    const handleDecrement = (id) => {
        const itemIndex = cartItems.findIndex(item => item.id === id);
        if (cartItems[itemIndex].quantity > 1) {
            decrementQuantity(id);
        } else {
            removeItem(id);
        }
    };

    return (
        <div className="p-4 bg-white rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <Link to="/" className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></Link>
                <h2 className="text-[15px] font-semibold">Cart Food</h2>
                <button className="text-black"><FontAwesomeIcon icon={faEllipsis} /></button>
            </div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg relative">
                        <button
                            onClick={() => removeItem(item.id)}
                            className="absolute top-0 right-0 p-2 text-black text-[10px] font-semibold"
                            style={{ cursor: 'pointer' }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4 " />
                            <div>
                                <h3 className="font-semibold text-[10px]">{item.name}</h3>
                                <p className="text-gray-600 text-[8px]">{item.weight}g</p>
                                <div className="flex  space-x-10">
                                    <p className="text-black font-semibold text-[12px]">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center bg-green-300 rounded-2xl">
                                        <button onClick={() => handleDecrement(item.id)} className="text-black text-[10px] font-semibold rounded-lg pl-1">-</button>
                                        <span className="mx-2 text-[10px] font-semibold">{item.quantity}</span>
                                        <button onClick={() => incrementQuantity(item.id)} className="text-black text-[10px] font-semibold rounded-lg pr-1">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className="border-t mt-4 pt-4">
                <div className="flex justify-between items-center ">
                    <span className='text-[10px] text-gray-500'>Item total:</span>
                    <span className='text-[10px] font-semibold'>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-[10px] text-gray-500'>Delivery charge:</span>
                    <span className='text-[10px] font-semibold'>${cartItems.length === 0 ? '0.00' : deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-[10px] text-gray-500'>Tax:</span>
                    <span className='text-[10px] font-semibold'>${cartItems.length === 0 ? '0.00' : tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl mt-4">
                    <span>Total:</span>
                    <span>${cartItems.length === 0 ? '0.00' : grandTotal.toFixed(2)}</span>
                </div>
                <button onClick={handleCheckout} className="w-full bg-green-400 p-2 mt-4 rounded-2xl">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
