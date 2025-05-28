import React from 'react';
// components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D2F66] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Chillstays</h2>
          <p className=" text-white/60 text-sm leading-relaxed tracking-normal max-w-lg ">
            Nous sommes une marketplace dédiée à la vente d'articles uniques et de qualité près de chez vous. Rejoignez
            notre communauté pour acheter et vendre en toute confiance. ou propriétaire d’un appartement meublé
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-bold mb-4">Nos services</h2>
          <ul className="space-y-2 text-sm text-white/60">
            <li>⚡ <a href="#" className="underline">Achats sécurisés</a></li>
            <li>⚡ <a href="#" className="underline">Vente facile et rapide</a></li>
            <li>⚡ <a href="#" className="underline">Support client 24/7</a></li>
            <li>⚡ <a href="#" className="underline">Options de livraison flexibles</a></li>
            <li>⚡ <a href="#" className="underline">Politique de retour sans tracas</a></li>
          </ul>
        </div>

        {/* Liens utiles */}
        <div>
          <h2 className="text-xl font-bold mb-4">Liens Utiles</h2>
          <ul className="space-y-2 text-sm text-white/60">
            <li>⚡ <a href="#" className="underline">Conditions d'utilisation</a></li>
            <li>⚡ <a href="#" className="underline">Politique de confidentialité</a></li>
            <li>⚡ <a href="#" className="underline">Centre d'aide</a></li>
            <li>⚡ <a href="#" className="underline">Contactez-nous</a></li>
            <li>⚡ <a href="#" className="underline">FAQ</a></li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-white/60 mb-2">Contactez-nous</p>
          <p className="text-sm text-white/60 mb-2">Email: chillstays@marketplace.com</p>
          <p className="text-sm text-white/60 mb-2">Téléphone : +237 * * *</p>
          <p className="text-sm text-white/60">Adresse : Douala-Cameroun</p>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="my-8 border-t border-gray-100 " />

      {/* Bas de page */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Suivez-nous</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><FaFacebook className="text-blue-600"/> Facebook</a>
            <a href="#" className="flex items-center gap-1  text-white/60 text-sm hover:underline"><FaInstagram className="text-pink-500" /> Instagram</a>
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><FaTwitter className="text-sky-400" /> Twitter</a>
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><FaLinkedin className="text-blue-700" /> LinkedIn</a>
          </div>
        </div>
        <p className="text-sm text-center md:text-right  text-white/60">
          Copyright<span className="text-green-500">@2025</span> . Tous Droits Réservés
        </p>
      </div>
    </footer>
  );
}
