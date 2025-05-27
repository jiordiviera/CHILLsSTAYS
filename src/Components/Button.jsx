import React from 'react';

function Button({title, description}) {
  return ( 
    <div>
        <button  className=' bg-[#28A745] border-solid rounded-[10px] text-center h-[30px] p-2  text-white'>
            {title}
        </button>
    </div>
   )
}

export default Button

