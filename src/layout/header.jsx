import { Phone, Info, Home, HelpCircle, LogIn, Globe, FileUp, Menu } from "lucide-react";
import { FaFlag, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../Components/LanguageSelector";

export default function Header() {
    // fonction pour le responsive
    const [menuOpen, setMenuOpen] = useState(false);
    const menu =  () => {
      setMenuOpen(!menuOpen)
    }
   
  return (
    <header className="bg-[#072F5B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-green-600 text-3xl font-bold italic">
          ChillStays
        </div>
        {/* buton pour le responsive */}
        <div className="md:hidden">
          <button onClick={menu}>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="hidden md:flex items-center ml-[100px] gap-6 text-sm text-gray-300">
          <Link to="/" className="flex items-center gap-1 hover:text-white">
          <img src='/images/home.png' className='mb-1 w-5 h-5' /> Accueil 
          </Link>
          <Link to="apropos" className="flex items-center gap-1 hover:text-white">
          <img src='/images/info-button.png' className='w-5 h-5' /> À propos
          </Link>
          <Link to="faq" className="flex items-center gap-1 hover:text-white">
          <img src='/images/faq.png' className='w-5 h-5' /> FAQ
          </Link>
          <div className="flex gap-2 ml-10">
          <LanguageSelector />
          </div>
          <Link to="publiezappartement" className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-sm hover:bg-green-700 transition">
          <img src='/images/file.png' className='w-5 h-5' />
            <span>Publiez Votre Appartement</span>
          </Link>
          
          
        </nav>

        <div className="hidden md:flex flex-col text-right text-sm">
          <span className="flex items-center  p-1 text-green-500">
          <img src='/images/phone-call.png' className='w-6 h-6 p-1' /> +237 654 589 172
          </span>
          <span className="flex items-center  p-1 text-green-500">
          <img src='/images/social.png' className='w-6 h-6 p-1' /> +237 674 589 172
          </span>
        </div>

        <div className="hidden md:flex ml-4 items-center gap-1 text-sm cursor-pointer px-4 py-2 bg-[#28A745] text-white hover:underline rounded-sm">
          <LogIn className="w-4 h-4" />
          Connexion
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 text-sm text-gray-300">
            <Link to="/" className="flex items-center gap-1 hover:text-white">
              <Home className="w-4 h-4" /> Accueil
            </Link>
            <Link to="apropos" className="flex items-center gap-1 hover:text-white">
              <Info className="w-4 h-4" /> À propos
            </Link>
            <Link to="faq" className="flex items-center gap-1 hover:text-white">
              <HelpCircle className="w-4 h-4" /> FAQ
            </Link>
            <div className="flex items-center gap-1">
              <FaFlag className="text-white" /> <span>FR</span>
              <Globe className="w-3 h-3 ml-1" />
            </div>
            <div className="">
              <ul className=" mt-[-10px] ">
                <li className="flex px-4 py-2 hover:bg-gray-100 hover:text-black mt- gap-2 cursor-pointer"><img src='/images/france.png' className='w-5 h-5'  /> Français</li>
                <li className="flex px-4 py-2 hover:bg-gray-100 hover:text-black gap-2 cursor-pointer"><img src='/images/united-kingdom.png' className='w-5 h-5'  />Anglais</li>
              </ul>
            </div>
            <button className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-sm hover:bg-green-700 transition">
              <FileUp className="w-5 h-5" />
              <span>Publiez Votre Appartement</span>
            </button>
            <div className="flex flex-col mt-2 text-sm">
              <span className="text-gray-400">Contactez-Nous</span>
              <span className="flex items-center text-green-500">
                <Phone className="w-4 h-4 mr-1" /> +237 654 589 172
              </span>
              <span className="flex items-center text-green-500">
                <FaWhatsapp className="w-4 h-4 mr-1" /> +237 674 589 172
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1 text-sm cursor-pointer px-4 py-2 bg-[#28A745] text-white hover:underline rounded-sm w-max">
              <LogIn className="w-4 h-4" />
              Connexion
            </div>
          </nav>
        </div>
        )}
        
      
    </header>
  );
}
