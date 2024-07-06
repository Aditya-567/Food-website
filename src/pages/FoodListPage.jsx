import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';
import cakeImage from '../assets/cake.png';
import coffeeImage from '../assets/coffee.png';
import croissantImage from '../assets/croissant.png';
import cupcakeImage from '../assets/cupcake.png';
import iceCreamImage from '../assets/icecream (1).png';
import mangoImage from '../assets/mango.png';
import noodleImage from '../assets/nodle.png';
import pizzaImage from '../assets/pizza.png';
import samosaImage from '../assets/samosa.png';
import tacoImage from '../assets/taco.png';
import FoodItem from '../components/FoodItem';
import Header from '../components/Header';

const foodItems = [
    { id: 1, name: 'Cheese Pizza', time: '30 mins', price: 12.99, image: pizzaImage, distance: 10 },
    { id: 2, name: 'Fruit Cake', time: '45 mins', price: 4.88, image: cakeImage, distance: 5 },
    { id: 3, name: 'Bubble Tea', time: '10 mins', price: 3.50, image: coffeeImage, distance: 20 },
    { id: 4, name: 'Mango Juice', time: '5 mins', price: 2.99, image: mangoImage, distance: 15 },
    { id: 5, name: 'Noodles', time: '20 mins', price: 5.99, image: noodleImage, distance: 12 },
    { id: 6, name: 'Cupcake', time: '15 mins', price: 3.99, image: cupcakeImage, distance: 10 },
    { id: 7, name: 'Croissant', time: '25 mins', price: 4.99, image: croissantImage, distance: 5 },
    { id: 8, name: 'Ice Cream', time: '10 mins', price: 2.99, image: iceCreamImage, distance: 20 },
    { id: 9, name: 'Samosa', time: '15 mins', price: 3.99, image: samosaImage, distance: 10 },
    { id: 10, name: 'Taco', time: '20 mins', price: 4.99, image: tacoImage, distance: 5 },
    { id: 11, name: 'Cheese Pizza', time: '30 mins', price: 12.99, image: pizzaImage, distance: 10 },
    { id: 12, name: 'Fruit Cake', time: '45 mins', price: 4.88, image: cakeImage, distance: 5 },
    { id: 13, name: 'Bubble Tea', time: '10 mins', price: 3.50, image: coffeeImage, distance: 20 },
    { id: 14, name: 'Mango Juice', time: '5 mins', price: 2.99, image: mangoImage, distance: 15 },
    { id: 15, name: 'Noodles', time: '20 mins', price: 5.99, image: noodleImage, distance: 12 },
    { id: 16, name: 'Cupcake', time: '15 mins', price: 3.99, image: cupcakeImage, distance: 10 },
    { id: 17, name: 'Croissant', time: '25 mins', price: 4.99, image: croissantImage, distance: 5 },
    { id: 18, name: 'Ice Cream', time: '10 mins', price: 2.99, image: iceCreamImage, distance: 20 },
    { id: 19, name: 'Samosa', time: '15 mins', price: 3.99, image: samosaImage, distance: 10 },
    { id: 20, name: 'Taco', time: '20 mins', price: 4.99, image: tacoImage, distance: 5 },

];

const FoodListPage = ({ addToCart }) => {
    const [distance, setDistance] = useState('20');
    const [activeButton, setActiveButton] = useState('setMeal');
    const [searchTerm, setSearchTerm] = useState(''); // State to track search input

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Define IDs for Hot Sale and Popularity items
    const hotSaleIds = [3, 6, 9]; // Example IDs for Hot Sale items
    const popularityIds = [1, 4, 7]; // Example IDs for Popular items

    // Filter food items based on search term and button filters
    const filteredFoodItems = useMemo(() => {
        return foodItems.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            if (activeButton === 'hotSale') {
                return matchesSearch && hotSaleIds.includes(item.id);
            } else if (activeButton === 'popularity') {
                return matchesSearch && popularityIds.includes(item.id);
            }
            return matchesSearch && item.distance <= parseInt(distance);
        });
    }, [searchTerm, activeButton, distance]);

    return (
        <>
            <Header />
            <div className="p-4 ">
                <h2 className="text-3xl font-semibold mb-4">Find good<br /> Food around you</h2>
                <div className="flex items-center mb-4 relative">
                    <input type="text" placeholder="Search your fav food" className="w-full p-2 border rounded-2xl pl-8 pr-10" style={{ fontSize: '12px' }} onChange={handleSearchChange} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="flex items-center mb-4">
                    <span className="mr-2 text-[25px] font-semibold">Find</span>
                    <select className="border p-1 rounded-2xl text-[10px]" onChange={handleDistanceChange}>
                        <option value="5">5km</option>
                        <option value="10">10km</option>
                        <option value="20">20km</option>
                    </select>
                </div>
                <div className="flex items-center mb-4 space-x-4">
                    <button className={`bg-${activeButton === 'setMeal' ? 'green-400' : 'gray-200'} text-black p-2 rounded-2xl text-[12px]`} onClick={() => handleButtonClick('setMeal')}>Set Meal</button>
                    <button className={`bg-${activeButton === 'hotSale' ? 'green-400' : 'gray-200'} text-black p-2 rounded-2xl text-[12px]`} onClick={() => handleButtonClick('hotSale')}>Hot Sale</button>
                    <button className={`bg-${activeButton === 'popularity' ? 'green-400' : 'gray-200'} text-black p-2 rounded-2xl text-[12px]`} onClick={() => handleButtonClick('popularity')}>Popularity</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 ">
                    {filteredFoodItems.map((item) => (
                        <FoodItem key={item.id} item={item} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FoodListPage;