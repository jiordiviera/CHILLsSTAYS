import { useState } from "react";
import { Globe } from "lucide-react";
import React from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const Language = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={Language}
        className="flex items-center gap-2 cursor-pointer"
      >
       <img src='/images/france.png' className='w-5 h-5'  />
        <span>FR</span>
        <Globe className="w-3 h-3 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded-sm shadow-lg z-50">
          <ul className="py-2">
            <li className="flex px-4 py-2 hover:bg-gray-100 gap-2 cursor-pointer"><img src='/images/france.png' className='w-5 h-5'  /> Français</li>
            <li className="flex px-4 py-2 hover:bg-gray-100 gap-2 cursor-pointer"><img src='/images/united-kingdom.png' className='w-5 h-5'  />Anglais</li>
            
          </ul>
        </div>
      )}
    </div>
  );
}
