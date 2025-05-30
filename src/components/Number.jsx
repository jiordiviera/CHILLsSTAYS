import React, { useState } from 'react';

const products = [
  // Exemple de produits
  {  id: 1,
        location: 'Appartement meuble Douala Ndogbong',
        price: 35000,
        description: 'Cet appartement de 60 m² dispose d\'une cuisine, de deux douches et de trois chambres, offrant un espace confortable et fonctionnel.',
        image: imageProduct, },
  { id: 2, name: 'Produit 2', description: 'Description du produit 2' },
  { id: 3, name: 'Produit 3', description: 'Description du produit 3' },
  { id: 4, name: 'Produit 4', description: 'Description du produit 4' },
  { id: 5, name: 'Produit 5', description: 'Description du produit 5' },
  { id: 6, name: 'Produit 6', description: 'Description du produit 6' },
  // Ajoutez plus de produits si nécessaire
];

const PAGE_SIZE = 3; // Nombre de produits par page

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentProducts.map(product => (
          <div key={product.id} className="border rounded-md p-4">
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Précédent
        </button>
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default ProductList;