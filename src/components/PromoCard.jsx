import React from 'react';
import Button from './Button';
import "../index.css";

export default function PromoCard(props) {
  return (
    <div className="bg-white border border-[#072F5B] ml-4 mr-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={props.image}
        alt="offre"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-[#072F5B] font-semibold text-lg mb-3">
          {props.title}
        </h3>
        <div className="text-gray-600 text-sm space-y-1">
          <p>{props.description0}</p>
          <p>
            {props.description1}{" "}
            <span className="font-bold">{props.pourcentage}</span> {props.description2}
          </p>
          <p>
            <span className="font-bold text-[#072F5B]">{props.rang}</span> {props.description3}
          </p>
        </div>
        <div className="mt-5 text-right">
          <Button title="Consulter" />
        </div>
      </div>
    </div>
  );
}
