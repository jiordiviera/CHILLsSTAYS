import React from 'react'
import Button from './Button'

function Product(props) {

  return (
    <div className="bg-white shadow  overflow-hidden flex flex-col md:flex-row gap-4 p-4 max-w-5xl mx-auto">
             <div className="md:w-1/2 w-full mr-5">
             <img src={props.image} alt="Product" className="w-full h-60 object-cover " />
             </div>
<div className="md:w-1/2 w-full flex flex-col justify-between p-2 ">
       <div className='p-10 pt-0'>
        <h2 className="text-xl font-semibold text-blue-900 mb-3" >{props.location}</h2>
        
        <p className="text-sm text-gray-700  ml-[60px] mt-1 mb-3">à partir de</p>
        <p className="text-xl font-semibold text-blue-900 mb-3 ">{props.price} FCFA / mois</p>
        <p className="text-gray-500 text-sm text-justify mb-3">{props.description}</p> 
        <div className="flex justify-center ml-[100px] text-white bg-green-600   px-4 py-0.1 rounded-md font-normal w-fit mt-4 ">
             <Button title="En savoir plus"  />
          </div>
        </div>
          
    </div>
    </div>

  )
}

export default Product