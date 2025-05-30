import React from "react";
import Button from "./Button";
import "../index.css";
import { Link } from "react-router-dom";


function HeaNosPoste() {
  return (
    <><section className="relative bg-cover bg-center h-[450px] bg-no-repeat"
     style={{ 
     backgroundImage: "url('/images/Apart1.png')",
     boxShadow: " inset 0 0 0 1000px rgba(0,0,0,0.7)" }}>
     <div className="absolute top-10  text-2xl bg-white text-black font-bold px-6 py-2  shadow z-10 mt-20"> Nos Postes Recents</div>

     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
        <h1 className="text-6xl md:text-5xl font-bold text-white mb-14 mt-20">TOUS POUR VOUS SATISFAIRE</h1>
           <div className="w-fit bg-[#28A745]  hover:bg-green-500 transition mr-[350px] rounded-md text-white font-medium text-lg px-6 py-4 mt-3 ">
             <Link to="#"> Publier vos appartements</Link>
          </div>
     </div>
     
      </section>
      <section>
        
        </section></>

  );
}

export default HeaNosPoste;