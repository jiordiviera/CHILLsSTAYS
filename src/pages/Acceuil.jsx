import React from 'react';
import Header from '../layaout/header';
import "../index.css";
import SearchBar from '../Components/Searchbar';
import Product from '../Components/product';
import image from '/images/ved.jpg';
function Acceuil() {
  const products=[{
    id:1,
    location:'Appartement meuble Douala Ndogbong',
    price:35000,
    description:'Cet appartement de 60 m² dispose d\'une cuisine, de deux douches et de trois chambres, offrant un espace confortable et fonctionnel.',
    image:image,
    
  }]
  return (
    <>
      <section className="relative min-h-screen h-[20%] bg-center bg-cover drop-shadow-2xl"
        style={{
          backgroundImage: "url('/images/Apart1.png')",
          boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)',
        }}>
        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>

        <div className="flex flex-col items-center justify-center text-center text-white px-4 pt-48 md:pt-60">
          <h1 className="text-3xl md:text-5xl uppercase font-extrabold bg-gradient-to-r from-white to-green-600 text-transparent bg-clip-text">
            Bienvenue sur ChillStays
          </h1>
          <p className="text-xl md:text-2xl mt-4">Trouvez des logements appropriés au Cameroun</p>
        </div>

        <div className="flex justify-center mt-12">
          <SearchBar />
        </div>

        <div className="flex justify-center mt-4">
          <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-[#28A745] text-lg md:text-xl font-semibold cursor-pointer hover:underline">
            Accéder aux logements étudiants
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold">
          Vous cherchez un logement pour un séjour inoubliable ?
        </h3>
      </section>

      <section className="px-6 md:px-20 py-6 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold mb-2">
          Nos Postes Récents
          <hr className="border-t border-gray-400 w-1/3 mx-auto md:mx-0" /></h3>
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
      
     <section className="bg-[#0D2F66] py-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">

    
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src="/images/step1.png" alt="Étape 1" className="w-24 h-24 object-contain" />
      </div>
      <p className="mt-4 text-green-500 font-bold text-lg">Trouvez & Réservez</p>
      <p className="text-white text-base">votre logement</p>
    </div>

   
    <span className="text-green-500 text-5xl font-bold">+</span>

   
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src="/images/step2.png" alt="Étape 2" className="w-24 h-24 object-contain" />
      </div>
      <p className="mt-4 text-green-500 font-bold text-lg">Recevez</p>
      <p className="text-white text-base">votre contrat de location</p>
    </div>

    
    <span className="text-green-500 text-5xl font-bold">+</span>

    
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src="/images/step3.png" alt="Étape 3" className="w-24 h-24 object-contain" />
      </div>
      <p className="mt-4 text-green-500 font-bold text-lg">Renvoyez</p>
      <p className="text-white text-base">votre contrat de location</p>
    </div>

   
    <span className="text-green-500 text-5xl font-bold">{'»'}</span>

   
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
        <img src="/images/step4.png" alt="Étape 4" className="w-24 h-24 object-contain" />
      </div>
      <p className="mt-4 text-green-500 font-bold text-lg">Bravo !</p>
      <p className="text-white text-base leading-tight">
        Votre logement est mis à<br /> votre disposition
      </p>
    </div>

  </div>
</section>

    </>
    
  );

  <Product/>
}

export default Acceuil;
