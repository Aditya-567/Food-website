import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FoodItem = ({ item, addToCart }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        addToCart(item);
    };

    return (
        <div className="relative border p-5 rounded-lg shadow-md mb-4 bg-white max-w-xs mx-auto sm:max-w-md">
            <div className="absolute top-2 right-2 cursor-pointer" onClick={handleFavoriteClick}>
                {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
            </div>
            <div className="flex justify-center mb-4">
                <img src={item.image} alt={item.name} className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] object-fit rounded-lg" />
            </div>
            <h2 className="text-[10px] sm:text-[10px] font-semibold text-center">{item.name}</h2>
            <p className="text-gray-600 text-[10px] sm:text-[10px] text-center">{item.time}</p>
            <div className="flex justify-center">
                <span className="text-green-500 font-bold text-sm sm:text-base">${item.price.toFixed(2)}</span>

            </div>
        </div>
    );
};

export default FoodItem;