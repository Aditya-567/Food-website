import { faArrowRight, faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewComponent = () => {
    const [review, setReview] = useState(''); // State to hold the review text
    const [reviews, setReviews] = useState([]); // State to hold all reviews as objects
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const [rating, setRating] = useState(0); // State to hold the rating

    const handleReviewChange = (event) => {
        setReview(event.target.value); // Update state with input
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const submitReview = (event) => {
        event.preventDefault();
        setReviews([...reviews, { text: review, rating: rating }]); // Store review and rating as an object
        setReview(''); // Clear the input after submission
        setRating(0); // Reset rating
        setShowForm(false); // Hide form after submission
    };

    const toggleForm = () => setShowForm(!showForm); // Toggle form visibility

    return (
        <div className='p-4'>
            <div className="p-4 bg-white rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <Link to="/" className="text-black"><FontAwesomeIcon icon={faChevronLeft} /></Link>
                    <h2 className="text-[15px] font-semibold">Review</h2>
                    <button className="text-black"><FontAwesomeIcon icon={faEllipsis} /></button>
                </div>
                <button onClick={toggleForm} className="mb-4 bg-green-500 text-[10px] text-white p-1 px-3 rounded-2xl hover:bg-green-6000">
                    Write Review
                </button>
                {showForm && (
                    <form onSubmit={submitReview} className="space-y-4">
                        <div className="flex justify-center my-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`h-8 w-8 ${rating >= star ? 'text-yellow-500' : 'text-gray-600'}`}
                                    onClick={() => handleRatingChange(star)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded text-[10px]"
                            value={review}
                            onChange={handleReviewChange}
                            placeholder="Type your review here..."
                            rows="4"
                        />
                        <button type="submit" className="w-[100px] bg-green-500 text-white p-1 rounded-2xl shadow-xl text-[10px] hover:bg-green-700">
                            Submit
                        </button>
                    </form>
                )}
                <div className="mt-4">
                    <h3 className=" font-semibold text-[10px]">Satisfied Customers <FontAwesomeIcon icon={faArrowRight} /></h3>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="mt-2 p-2 bg-gray-100 rounded-2xl text-[8px]">
                                <div className="flex space-x-1 text-yellow-500">{Array(review.rating).fill('★').join('')}</div>
                                <div>{review.text}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewComponent;