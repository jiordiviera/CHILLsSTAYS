import React from 'react';
import Header from '../layaout/header';
import "../index.css";
import SearchBar from '../Components/Searchbar';
import image from '/images/Apart1.png';
import PromoCard from '../Components/PromoCard';
import { CheckCircle, Home, CalendarCheck, Headset, Zap } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Product from '../Components/product';
import Carossel from "../Components/Carossel"
import imageProduct from '/images/ved.jpg';
import Footer from '../layaout/Footer';

function AcceuilEtudiant(props) {
  const tab = [{
    id: "1",
    title: "profitez d'offre exclusives, concues specialement pour vous",
    description0: "petit avantage pour les clients regulier",
    description1: "en ce moment",
    pourcentage: "30%",
    description2: "de reduction sur",
    rang: "5eme",
    description3: ", prochaine reservation",
    image: image
  }];

  const tab1 = [{
    id: "1",
    title: "Laissez-vous emporter par la magie de nos week-ends exclusifs",
    description0: "Votre prochaine destination de rêve à prix ",
    description1: "réduit rende-vous chez nous pour profiter",
    description2: "promotion ",
    pourcentage: "de cette giga ",
    description3: "sur nos appartements ",
    image: image
  }];

  const products = [{
    id: 1,
    location: 'Appartement meuble Douala Ndogbong',
    price: 35000,
    description: 'Cet appartement de 60 m² dispose d\'une cuisine, de deux douches et de trois chambres, offrant un espace confortable et fonctionnel.',
    image: imageProduct,
  }];

  const navigate = useNavigate(); // à mettre dans le composant Acceuil

  const regions = [
    { name: "LITTORALE", image: "/images/23.jpg" },
    { name: "CENTRE", image: "/images/22.jpg" },
    { name: "NORD OUEST", image: "/images/16.jpg" },
    { name: "OUEST", image: "/images/Appart2.png" },
    { name: "NORD", image: "/images/24.jpg" },
    { name: "ADAMAOUA", image: "/images/Apart1.png" },
    { name: "EST", image: "/images/23.jpg" },
    { name: "NORD-EST", image: "/images/19.jpg" },
    { name: "SUD-OUEST", image: "/images/Appart3.png" },
    { name: "SUD", image: "/images/20.jpg" },
  ];

  const goToRegion = (regionName) => {
    const path = regionName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/logements/${path}`);
  };

  return (
    <>
      <section className="relative min-h-[500px] bg-center bg-cover drop-shadow-2xl"
        style={{ 
          backgroundImage: "url('/images/16.jpg')",
          boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)',
        }}>
        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>
        <div className="flex flex-col items-center justify-center text-center text-white px-4 pt-48 md:pt-30">
          <h1 className="text-3xl md:text-5xl uppercase font-extrabold bg-linear-to-r from-white to-green-600 text-transparent bg-clip-text">
            Bienvenue sur ChillStays
          </h1>
          <p className="text-xl md:text-2xl mt-4">Trouvez des logements appropriés au Cameroun</p>
        </div>

        <div className="flex justify-center mt-4">
          <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-[#28A745] text-lg md:text-xl font-semibold cursor-pointer hover:underline">
            Accéder aux logements étudiants
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <SearchBar />
        </div>
      </section>

      <div className='thebody'>
        <section className="px-6 py-12 md:px-20 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">
            Vous cherchez un logement pour un séjour inoubliable ?
          </h3>
          <div className='mt-[50px]'>
            <Carossel />
          </div>
        </section>

        <section className=" px-6  md:px-20  text-center md:text-left">
          <div className="flex justify-between items-center ">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Nos Postes Récents
          </h3>
          <Button title="voir plus" className="bg-[#001F4D] text-white text-sm px-4 py-1 rounded-sm hover:bg-blue-900" />
          </div>
          <hr className="border-t mt-1 border-gray-400 mb-6 w-1/3 w-full mx-auto md:mx-0" />
          <div className='mt-10'>
            {products.map((prod) => (
              <Product
                key={prod.id}
                location={prod.location}
                price={prod.price}
                description={prod.description}
                image={prod.image}
              />
            ))}
          </div>

          <div className='mt-10'>
            {products.map((prod) => (
              <Product
                key={prod.id}
                location={prod.location}
                price={prod.price}
                description={prod.description}
                image={prod.image}
              />
            ))}
          </div>

          <div className='mt-10'>
            {products.map((prod) => (
              <Product
                key={prod.id}
                location={prod.location}
                price={prod.price}
                description={prod.description}
                image={prod.image}
              />
            ))}
          </div>
        </section>

       

        
        <section className="px-6 p-12 mr-[70px] ml-[70px] max-w-full mx-auto">
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Trouvez un logement adéquat</h2>
            <Button title="voir plus" className="bg-[#001F4D] text-white text-sm px-4 py-1 rounded-sm hover:bg-blue-900" />
          </div>
          <hr className="border-t mt-1 border-gray-400 mb-6 w-1/3 w-full mx-auto md:mx-0" />

          {/* Grille des régions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                onClick={() => goToRegion(region.name)} // Ajout du clic dynamique
                className="relative group h-32 bg-cover bg-center rounded-md shadow-md overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url('${region.image}')`, // Image spécifique
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-md md:text-lg text-center">
                  {region.name}
                </span>
              </div>
            ))}
            {/* Section appel à l'action */}
          <div className="text-center w-full mt-4 ml-[125px]">
            <h3 className="text-[#072F5B] font-semibold whitespace-nowrap text-lg mb-1">
              Vous recherchez un logement?
            </h3>
            <p className="text-sm text-gray-600 mb-4">N’hésitez plus !</p>
            <Button title="Rechercher Un Logement" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-sm shadow-sm" />
          </div>
          </div>

          
        </section>

     
       
      
      </div>

      
         <section className="bg-[#0D2F66] px-6 p-12">
         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4">

    
          <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/images/f1.jpg" alt="Étape 1" className="w-24 h-24 object-contain" />
          </div>
          <p className="mt-4 text-green-500 font-bold text-lg">Trouvez & Réservez</p>
          <p className="text-white text-base">votre logement</p>
          </div>

   
          <span className="text-green-500 text-5xl font-bold">+</span>

   
          <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/images/f4.jpg" alt="Étape 2" className="w-24 h-24 object-contain" />
          </div>
          <p className="mt-4 text-green-500 font-bold text-lg">Recevez</p>
          <p className="text-white text-base">votre contrat de location</p>
          </div>

    
          <span className="text-green-500 text-5xl font-bold">+</span>

    
          <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/images/f3.jpg" alt="Étape 3" className="w-24 h-24 object-contain" />
          </div>
          <p className="mt-4 text-green-500 font-bold text-lg">Renvoyez</p>
          <p className="text-white text-base">votre contrat de location</p>
          </div>

   
          <span className="text-green-500 text-5xl font-bold">{'»'}</span>

        
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/images/f5.jpg" alt="Étape 4" className="w-24 h-24 object-contain" />
            </div>
            <p className="mt-4 text-green-500 font-bold text-lg">Bravo !</p>
            <p className="text-white text-base leading-tight">
              Votre logement est mis à<br /> votre disposition
            </p>
          </div>
        </div>
        <div >
        <hr className="my-8 border-t  border-gray-100 " />
        <Footer />
        </div>
        </section>
        
      
    </>
  );
}

export default AcceuilEtudiant;