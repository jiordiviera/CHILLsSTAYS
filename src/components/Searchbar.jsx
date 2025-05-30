import { Search, MapPin, Calendar, Wallet } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="flex rounded-full overflow-hidden border-2 border-[#072F5B] bg-white w-full max-w-4xl mx-auto shadow-md">
      
      <div className="flex items-center px-4 py-2 flex-1 border-r border-[#072F5B]">
        <MapPin className="text-gray-600 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="ville   ex: douala, yaoundé………"
          className="outline-hidden w-full text-sm placeholder-gray-500"
        />
      </div>

      
      <div className="flex items-center px-4 py-2 flex-1 border-r border-[#072F5B]">
        <Wallet className="text-gray-600 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="BUD budget"
          className="outline-hidden w-full text-sm placeholder-gray-500"
        />
      </div>

      
      <div className="flex items-center px-4 py-2 flex-1 border-r border-[#072F5B]">
        <Calendar className="text-gray-600 w-5 h-5 mr-2" />
        <input
          type="date"
          placeholder="date"
          className="outline-hidden w-full text-sm placeholder-gray-500"
        />
      </div>

      
      <button className="bg-[#072F5B] hover:bg-[#0a3a6d] text-white p-3">
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}
