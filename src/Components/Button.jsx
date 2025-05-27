import React from 'react';

function Button({title, description}) {
  return ( 
   <div>
        <button className="bg-[#28A745] text-white text-sm px-4 py-1 rounded hover:bg-green-500 transition">
            {title}
        </button>
    </div>
   )
}

export default Button

