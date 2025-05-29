import React , { useState }  from 'react'
import "../index.css";
import Header from '../layaout/header'
import Footer from '../layaout/Footer'
import HeaNosPoste from '../Components/HeaNosPoste'
import Product from '../Components/product';
import imageProduct from '/images/ved.jpg';




export default function NosPostesRecent() {
      const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("budget");

  const options = ["budget", "quartier", "date", "prix"];

  const products = [{
      id: 1,
      location: 'Appartement meuble Douala Ndogbong',
      price: 35000,
      description: 'Cet appartement de 60 m² dispose d\'une cuisine, de deux douches et de trois chambres, offrant un espace confortable et fonctionnel.',
      image: imageProduct,
    },
    {
      id: 2,
      location: 'Appartement meuble Douala Akwa',
      price: 45000,
      description: 'Un appartement spacieux de 80 m² avec une cuisine moderne, deux douches et trois chambres, idéal pour les familles.',
      image: imageProduct,
    },
    {
      id: 3,
      location: 'Appartement meuble Douala Bonapriso',
      price: 60000,
      description: 'Un appartement élégant de 100 m² avec une cuisine équipée, deux douches et trois chambres, parfait pour un séjour confortable.',
      image: imageProduct,
    },
    {
      id: 4,
      location: 'Appartement meuble Douala Bonanjo',
      price: 70000,
      description: 'Un appartement luxueux de 120 m² avec une cuisine haut de gamme, deux douches et trois chambres, offrant un confort inégalé.',
      image: imageProduct,
    },
];

  return (
        <><>
      
      <div>
        <Header />
      </div>
      <div>
        <HeaNosPoste />
      </div>
      <div className='thebody'>
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-20">
      <h2 className="text-lg md:text-xl text-[#0D2F66] font-medium mb-4 md:mb-0">
        Plus de <strong>95 Logements</strong> sur tous les regions
      </h2>

      <div className="relative">
        <div className="flex items-center space-x-2">
          <span className="text-base font-medium">Trier par:</span>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer border border-gray-400 px-4 py-2 flex items-center justify-between w-40 bg-white shadow-sm"
          >
            <span className="capitalize">{selected}</span>
            <span className="ml-2 text-blue-900">▾</span>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-md z-10">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer capitalize"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
          <div className="mt-10 pb-10 px-6 md:px-20 grid md:grid-cols-1 grid-cols-2  gap-6">
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
          
          </div>
          {/* <div>
            <Number />
          </div> */}
          <div>
              <Footer />
          </div>
          </></>
  );
}



