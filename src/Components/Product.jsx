import React, { useState } from 'react';
import Button from './Button';
import '../index.css';

function Product(props) {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-sm overflow-hidden flex flex-col md:flex-row gap-4 p-6 max-w-full mx-auto rounded-lg">

      <div className="md:w-1/2 w-full relative">
        <img
          src={props.image}
          alt="Product"
          className="w-full h-60 object-cover rounded-md"
        />
        
         <button
          onClick={handleLikeToggle}
          className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 border-2  rounded-full shadow hover:scale-110 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? 'red' : 'white'}
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 6.583a5.373 5.373 0 00-9.46-2.21l-.292.347-.292-.347a5.373 5.373 0 00-9.46 2.21 5.373 5.373 0 001.263 5.843l7.838 7.837a.75.75 0 001.06 0l7.838-7.837a5.373 5.373 0 001.263-5.843z"
            />
          </svg>
        </button>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-between p-4">
        <div className='mt-[-50px]'>
          <h2 className="text-2xl font-semibold text-right pr-5 mt-[30px] text-[#072F5B] mb-2">{props.location}</h2>
          <p className="text-sm text-gray-700 mb-1">à partir de</p>
          <p className="text-2xl font-bold text-[#072F5B] mb-4">{props.price} FCFA / jours</p>
          <p className="text-gray-600 pr-5 text-sm leading-snug text-justify mb-6">
            {props.description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="w-fit bg-green-600 ml-40 rounded-md text-white font-medium text-sm px-6 py-2">
            <Button title="En savoir plus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
