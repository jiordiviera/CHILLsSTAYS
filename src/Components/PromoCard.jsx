import React from 'react'
import Button from './Button'
import "../index.css";

export default function PromoCard(props) {
  return (
    <div className="border border-[#072F5B] rounded-md p-4 max-w-md mx-auto max-h-[100%] shadow-md">
      <h3 className="text-center text-[#072F5B] font-bold text-[16px] mb-2">
        {props.title}
      </h3>
      
      <div className="flex items-start justify-between gap-2">
        <div className="text-[14px] leading-snug">
          <p>{props.description0}</p>
          <p>
           {props.description1} <span className="font-bold">{props.pourcentage}</span> {props.description2}<br />
            <span className="font-bold text[#072F5B]">{props.rang}</span> {props.description3}
          </p>
        </div>

        <img
          src={props.image}
          alt="offre"
          className="w-[150px] h-[100px] object-cover rounded-md"
        />
      </div>

      <div className="flex justify-center mt-[-30px]">
        <Button title="consulter"/>
          
      </div>
    </div>
  );
}

