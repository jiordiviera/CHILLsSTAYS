import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D2F66] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 pl-[100px] pr-[100px]">
        <div>
          <h2 className="text-2xl font-bold mb-4">Chillstays</h2>
          <p className=" text-white/60 text-sm text-justify leading-relaxed tracking-normal pr-10 max-w-lg ">
            Nous sommes une marketplace dédiée à la vente d'articles uniques et de qualité près de chez vous. Rejoignez
            notre communauté pour acheter et vendre en toute confiance. ou propriétaire d’un appartement meublé
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Nos services</h2>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <div><Link to="/achats" className="underline">Achats sécurisés</Link></div>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <div><Link to="/vente" className="underline">Vente facile et rapide</Link></div>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <div><Link to="/support" className="underline">Support client 24/7</Link></div>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <div><Link to="/livraison" className="underline">Options de livraison flexibles</Link></div>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <div><Link to="/retour" className="underline">Politique de retour sans tracas</Link></div>
            </li>
          </ul>
        </div>

        {/* Liens utiles */}
        <div>
          <h2 className="text-xl font-bold mb-4">Liens Utiles</h2>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <Link to="/conditions" className="underline">Conditions d'utilisation</Link>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <Link to="/confidentialite" className="underline">Politique de confidentialité</Link>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <Link to="/aide" className="underline">Centre d'aide</Link>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <Link to="/contact" className="underline">Contactez-nous</Link>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="text-white w-5 h-5 mt-1" />
              <Link to="/faq" className="underline">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className='text-justify'>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-white/60 mb-2">Contactez-nous</p>
          <p className="text-sm text-white/60 mb-2">Email: chillstays@marketplace.com</p>
          <p className="text-sm text-white/60 mb-2">Téléphone : +237 697 56 34</p>
          <p className="text-sm text-white/60">Adresse : Douala-Cameroun</p>
        </div>
      </div>

      <hr className="my-8 border-t border-gray-100" />

      {/* Bas de page */}
      <div className="max-w-full pl-[100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Suivez-nous</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><img src='/images/facebook.png' className='w-5 h-5' /> Facebook</a>
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><img src='/images/instagram.png' className='w-5 h-5' /> Instagram</a>
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><img src='/images/twitter.png' className='w-5 h-5' /> Twitter</a>
            <a href="#" className="flex items-center gap-1 text-white/60 text-sm hover:underline"><img src='/images/linkedin.png' className='w-5 h-5' /> LinkedIn</a>
          </div>
        </div>
        <p className="text-sm text-center pr-[100px] md:text-right text-white/60">
          Copyright <span className="text-green-500">@2025</span> . Tous Droits Réservés
        </p>
      </div>
    </footer>
  );
}
