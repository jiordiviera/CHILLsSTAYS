import React from 'react';

function Button({title, description}) {
  return ( 
    <div>
        <button  className='text-[23px] bg-[#28A745] border-solid rounded-[10px] text-center h-[50px] p-2 border-none text-white'>
            {title}
        </button>
    </div>
   )
}

export default Button

