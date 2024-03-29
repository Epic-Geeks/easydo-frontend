import React from 'react';
import { FaStar } from 'react-icons/fa'
import { useState } from 'react';
export default function Reviews() {

    let comments = [
        {
            "pic": "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
            "name": "Michael Gough",
            "comment": "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
            "date": "Feb. 8, 2022"
        },
        {
            "pic": "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
            "name": "amani smadi",
            "comment": "I love coding ",
            "date": "Dec. 15, 2022"
        },
    ]

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleRating = (value) => {
        setCurrentValue(value);
        // console.log(value)
    };

    const handleMouseOver = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2>
                </div>
                <div className="flex items-center my-5 ml-1">
                    {stars.map((star, index) => (
                        <FaStar
                            key={index}
                            size={20}
                            style={{
                                marginRight: 3,
                                cursor: "pointer",
                            }}
                            color={index < (hoverValue || currentValue) ? "#ffc107" : "#e4e5e9"}
                            onClick={() => handleRating(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
                <form className="mb-6">
                    {/* <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label for="comment" className="sr-only"></label>
                        <textarea id="comment" rows="3"
                            className="resize-none px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="What's your feedback ?" required></textarea>
                    </div> */}
                    {/* <button type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-cyan-700 rounded-lg focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900 hover:bg-teal-500">
                        Post review
                    </button> */}
                </form>
                {/* {comments && comments.map((comments, idx) => (
                    <article key={idx} className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={comments.pic}
                                        alt="Michael Gough" />{comments.name}</p>
                                <div className="flex">
                                    {stars.map((star, index) => (
                                        <FaStar
                                            key={index}
                                            size={15}
                                            style={{
                                                marginRight: 3,
                                            }}
                                            color={index < comments.averageRate ? "#ffc107" : "#e4e5e9"}

                                        />
                                    ))}
                                </div>
                            </div>
                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            <div id="dropdownComment1"
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="##"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="##"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="##"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">{comments.comment}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 float-right"><time pubdate datetime="2022-02-08"
                            title="date">{comments.date}</time></p>
                    </article>
                ))} */}
            </div>
        </section>
    )
}



