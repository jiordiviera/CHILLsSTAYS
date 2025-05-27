import { Phone, Info, Home, HelpCircle, LogIn, Globe, FileUp } from "lucide-react";
import { FaFlag, FaWhatsapp } from "react-icons/fa";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#072F5B] text-white py-3 px-6 shadow-md">
      <div className="flex justify-between items-center text-[16px] flex-wrap">
        {/* Logo */}
        <div className="flex ml-[50px] items-center gap-2 text-green-600 text-3xl font-bold italic">
          <span>ChillStays</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-[16px]">
          <div className="flex ml-[100px] mt-[100px] mt-[50px] items-center gap-8 text-gray-300">
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <Home className="w-4 h-4" />
              Accueil
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <Info className="w-4 h-4" />
              À propos
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </a>
          </div>
          <div className="flex ml-[-150px] mt-[-50px] items-center gap-1 cursor-pointer">
            <FaFlag className="text-white" />
            <span>FR</span>
            <Globe className="w-3 h-3 ml-1" />
          </div>

          <button className="flex mt-[-50px] items-center gap-1">
            <FileUp className="w-5 h-5" />
            <span>Publiez Votre Appartement</span>
          </button>

        </nav>

        {/* Contact Info */}
        <div className="flex flex-col text-right text-[16px]">
          <span className="text-gray-400">Contactez-Nous</span>
          <span className="flex items-center text-green-500">
            <Phone className="w-4 h-4 mr-1" /> +237 654 589 172
          </span>
          <span className="flex items-center text-green-500">
            <FaWhatsapp className="w-4 h-4 mr-1" /> +237 674 589 172
          </span>
        </div>

        {/* Connexion */}
        <div className="ml-4 mr-[50px] flex items-center gap-1 text-[16px] cursor-pointer p-2 bg-[#28A745] text-white hover:underline">
          <LogIn className="w-4 h-4" />
          connexion
        </div>
      </div>
    </header>
  );
}
