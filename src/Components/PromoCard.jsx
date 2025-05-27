import React from 'react';
import Button from './Button';
import "../index.css";

export default function PromoCard(props) {
  return (
    <div className="border border-[#072F5B] rounded-lg max-w-full m-4 p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      
      <img
        src={props.image}
        alt="offre"
        className="w-full h-[200px] object-cover rounded-lg mb-4"
      />

      <h3 className="text-left p-4 text-[#072F5B] font-bold text-lg mb-2">
        {props.title}
      </h3>
      
      <div className="flex flex-col pl-4 items-left text-left">
        <p className="text-sm ">{props.description0}</p>
        <p className="text-sm ">
          {props.description1} <span className="font-bold">{props.pourcentage}</span> {props.description2}
          <br />
          <span className="font-bold text-[#072F5B]">{props.rang}</span> {props.description3}
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <Button title="Consulter" />
      </div>
    </div>
  );
}