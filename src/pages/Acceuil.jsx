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

function Acceuil(props) {
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
          backgroundImage: "url('/images/Apart1.png')",
          boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)',
        }}>
        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>
        <div className="flex flex-col items-center justify-center text-center text-white px-4 pt-48 md:pt-30">
          <h1 className="text-3xl md:text-5xl uppercase font-extrabold bg-gradient-to-r from-white to-green-600 text-transparent bg-clip-text">
            Bienvenue sur ChillStays
          </h1>
          <p className="text-xl md:text-2xl mt-4">Trouvez des logements appropriés au Cameroun</p>
        </div>

        <div className="flex justify-center mt-4">
          <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-[#28A745] text-lg md:text-xl font-semibold cursor-pointer hover:underline">
            Accéder aux logements étudiants
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <SearchBar />
        </div>
      </section>

      <div className='thebody'>
        <section className="px-6 md:px-20 py-12 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">
            Vous cherchez un logement pour un séjour inoubliable ?
          </h3>
          <div className='mt-[50px]'>
            <Carossel />
          </div>
        </section>

        <section className="px-6 md:px-20 py-6 text-center md:text-left">
          <div className="flex justify-between items-center ">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Nos Postes Récents
          </h3>
          <Button title="voir plus" className="bg-[#001F4D] text-white text-sm px-4 py-1 rounded hover:bg-blue-900" />
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

        <section className="px-6 md:px-20 py-6 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Offres Speciales</h3>
          </div>
          <div className='grid grid-cols-2 mt-[50px]'>
            {tab.map((item) => (
              <PromoCard
                key={item.id}
                title={item.title}
                description0={item.description0}
                description1={item.description1}
                pourcentage={item.pourcentage}
                description2={item.description2}
                rang={item.rang}
                description3={item.description3}
                image={item.image} />
            ))}
            {tab1.map((item) => (
              <PromoCard
                key={item.id}
                title={item.title}
                description0={item.description0}
                description1={item.description1}
                pourcentage={item.pourcentage}
                description2={item.description2}
                rang={item.rang}
                description3={item.description3}
                image={item.image} />
            ))}
          </div>
        </section>

        <section className="px-4 py-8 mt-[50px] mr-[70px] ml-[70px]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6">
            {/* Image gauche */}
            <img
              src="/images/21.jpg"
              alt="clients heureux"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />

            {/* Contenu à droite */}
            <div className="space-y-4">
              <h2 className="text-xl mt-[-40px] mb-[50px] md:text-2xl font-bold text-center text-[#072F5B]">
                Pourquoi Choisir Notre Plateforme ?
              </h2>
              <ul className="text-[16px] space-y-2 pl-5 text-gray-800">
                <li className="flex items-start pb-[20px] gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>
                    <span className="font-semibold text-black">
                      Appartement & Chambre vérifiés
                    </span>
                  </span>
                </li>
                <li className="flex items-start pb-[20px] gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>Réservation facile</span>
                </li>
                <li className="flex items-start pb-[20px] gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>Assistance 24/7</span>
                </li>
                <li className="flex items-start pb-[20px] gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>
                    <span className="font-bold text-black">Large choix</span> de
                    logement au meilleur prix!
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pictogrammes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center">
            <div className="bg-[#072F5B] text-white rounded-md py-6 px-4 shadow-lg">
              <Home className="mx-auto mb-2 w-6 h-6" />
              <p>Appartement vérifié</p>
            </div>
            <div className="bg-[#072F5B] text-white rounded-md py-6 px-4 shadow-lg">
              <CalendarCheck className="mx-auto mb-2 w-6 h-6 text-blue-400" />
              <p>Réservation facile</p>
            </div>
            <div className="bg-[#072F5B] text-white rounded-md py-6 px-4 shadow-lg">
              <Headset className="mx-auto mb-2 w-6 h-6 text-blue-300" />
              <p>Assistance 24/7</p>
            </div>
          </div>
        </section>

        <section className="py-20 mr-[70px] ml-[70px] px-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Trouvez un logement adéquat</h2>
            <Button title="voir plus" className="bg-[#001F4D] text-white text-sm px-4 py-1 rounded hover:bg-blue-900" />
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
            <Button title="Rechercher Un Logement" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow" />
          </div>
          </div>

          
        </section>

        <section className="px-4 py-12 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#072F5B] mb-6 flex items-center">
                <span className="mr-2"><img src='/images/public-service (1).png' className='w-10' /></span> Nos Services
              </h2>
              <p className="mb-4">Voici ce que nous offrons à nos propriétaires :</p>
              <ul className="space-y-4 text-gray-700 text-[16px]">
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Visibilité maximale</strong><br />
                    Votre annonce est diffusée auprès de milliers de voyageurs chaque jour.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Support 7j/7</strong><br />
                    Une équipe dédiée pour vous aider à tout moment.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Paiements sécurisés</strong><br />
                    Nous gérons les transactions pour que vous soyez payé en toute sécurité.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Assurance incluse</strong><br />
                    Une couverture contre les dommages pendant les séjours.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Outils de gestion faciles</strong><br />
                    Tableau de bord complet pour suivre vos réservations, revenus, et messages.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-[#072F5B] w-5 h-5 mt-1" />
                  <div>
                    <strong>Évaluations fiables</strong><br />
                    Chaque locataire est noté et vérifié, pour une tranquillité d'esprit.
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                src="/images/25.jpg"
                alt="Service"
                className="rounded-md shadow-lg w-full h-[500px] mt-[10%] ml-4 max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-20 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/images/7.jpg"
                alt="Propriétaires heureux"
                className="rounded-md shadow-lg w-full max-w-md object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/l1.jpg"
                  alt="Logo maison"
                  className="w-10 h-10"
                />
                <h3 className="text-lg font-semibold text-[#072F5B]">Pour les Propriétaires</h3>
              </div>
              <h2 className="text-xl font-bold text-[#072F5B] ">
                Vous souhaitez proposer des logements ?
              </h2>
              <p className="text-black font-semibold">
                Chillstays vous accompagne<br />
                de la mise en ligne à la location
              </p>
              <ul className="space-y-2">
                <li className="flex items-center font-semibold text-black">
                  Une visibilité accrue
                </li>
                <li className="flex items-center font-semibold text-black">
                  Des contacts sérieux
                </li>
                <li className="flex items-center font-semibold text-black">
                  Un outil de gestion adapté
                </li>
              </ul>

              <div className="text-white rounded-md font-semibold pl-20">
                <Button title="Contactez-Nous" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Acceuil;