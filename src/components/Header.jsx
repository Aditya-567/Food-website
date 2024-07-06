import { faBars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="p-4">
            <div className="flex justify-between items-center">
                <span className="mr-4 flex items-center font-semibold">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-400" />
                    <span className="text-black">Bei</span><span className="text-green-600">Jing</span>
                </span>
                <div className="relative">
                    <button onClick={toggleDropdown} className=" p-2 rounded-full">
                        <FontAwesomeIcon icon={faBars} className="text-black" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[100px] bg-white text-black text-[12px] font-semibold rounded-md shadow-2xl z-50">
                            <Link to="/cart" className="block px-4 py-2 ">Cart</Link>

                            <Link to="#" className="block px-4 py-2 ">Food List</Link>
                            <Link to="#" className="block px-4 py-2 ">About</Link>
                            <Link to="/review" className="block px-4 py-2 ">Review</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;