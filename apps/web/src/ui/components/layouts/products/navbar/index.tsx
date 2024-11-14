import { useState } from 'react';
import Link from 'next/link';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary p-4 drop-shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-zinc-50 font-bold text-3xl lg:text-4xl">
          <Link href="/">Pet Lovers</Link>
        </h1>
        <button 
          className="lg:hidden text-zinc-50 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <nav className="hidden lg:flex space-x-4 text-zinc-50 font-semibold">
          <Link href="/">Produtos</Link>
          <Link href="/services">Serviços</Link>
          <Link href="/clients">Clientes</Link>
          <Link href="/pets">Pets</Link>
          <Link href="/consumption">Registro de Consumo</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="lg:hidden mt-4 flex flex-col space-y-4 text-zinc-50 font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)}>Produtos</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link href="/clients" onClick={() => setIsOpen(false)}>Clientes</Link>
          <Link href="/pets" onClick={() => setIsOpen(false)}>Pets</Link>
          <Link href="/consumption" onClick={() => setIsOpen(false)}>Registro de Consumo</Link>
        </nav>
      )}
    </header>
  );
};
