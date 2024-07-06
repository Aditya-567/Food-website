import { faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TimerPage = () => {
    const location = useLocation();
    const maxTime = location.state?.maxTime; // Ensure maxTime is retrieved correctly

    const [timeLeft, setTimeLeft] = useState(maxTime * 60); // Convert minutes to seconds

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const percentage = (timeLeft / (maxTime * 60)) * 100;

    return (
        <div className='p-4'>
            <div className="p-4 bg-white rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <Link to="/" className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></Link>
                    <h2 className="text-[15px] font-semibold">Time Remaining</h2>
                    <button className="text-black"><FontAwesomeIcon icon={faEllipsis} /></button>
                </div>
                <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-4">
                    <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="44" stroke="lightgreen" strokeWidth="8" fill="transparent" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="44"
                            stroke="#ef4455"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray="289.02"
                            strokeDashoffset={`${289.02 - (289.02 * percentage) / 100}`}
                            style={{ transition: 'stroke-dashoffset 1s linear' }}
                        />
                    </svg>
                    <div className="text-xl font-semibold">{formatTime(timeLeft)}</div>

                </div>
                <div className='flex flex-col items-center justify-center mb-8'>
                    <h2 className='text-[10px] font-semibold'>Your order will be ready in </h2>
                    <h2 className='text-[10px] font-semibold'>Thank you for your patience</h2>
                </div>


                <Link to="/" className="bg-green-300 hover:bg-green-500 text-black text-[10px] font-bold py-2 px-4 rounded-2xl">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default TimerPage;