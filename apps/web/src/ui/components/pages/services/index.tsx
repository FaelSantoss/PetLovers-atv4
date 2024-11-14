'use client'
import { useState } from 'react'
import ServicesTable from './services-table';

const mockServices = [
  { id: 1, name: 'Banho e Tosa', price: 'R$ 70,00' },
  { id: 2, name: 'Consulta Veterinária', price: 'R$ 150,00' },
  { id: 3, name: 'Vacinação', price: 'R$ 120,00' },
  { id: 4, name: 'Tosa Higiênica', price: 'R$ 50,00' },
  { id: 5, name: 'Adestramento Básico', price: 'R$ 200,00' },
  { id: 6, name: 'Transporte de Pets', price: 'R$ 80,00' },
  { id: 7, name: 'Hospedagem para Pets', price: 'R$ 300,00' },
  { id: 8, name: 'Hidratação de Pelos', price: 'R$ 90,00' },
];

export const ServicesPage = () => {
  const [services] = useState(mockServices)

  return (
    <>
      <div>
        <ServicesTable 
          services={services} 
        />
      </div>
    </>
  )
}
