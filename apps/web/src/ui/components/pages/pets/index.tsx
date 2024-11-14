'use client'
import { useState } from 'react'
import PetsTable from './pets-table';

const mockPets = [
    { id: 1, name: 'Rex', type: 'Cachorro', race: 'Golden Retriever', gender: 'Macho', ownerName: 'João Silva' },
    { id: 2, name: 'Mimi', type: 'Gato', race: 'Siamês', gender: 'Fêmea', ownerName: 'Maria Oliveira' },
    { id: 3, name: 'Thor', type: 'Cachorro', race: 'Bulldog', gender: 'Macho', ownerName: 'Carlos Souza' },
    { id: 4, name: 'Luna', type: 'Gato', race: 'Persa', gender: 'Fêmea', ownerName: 'Ana Costa' },
    { id: 5, name: 'Spike', type: 'Cachorro', race: 'Beagle', gender: 'Macho', ownerName: 'Pedro Almeida' },
    { id: 6, name: 'Bella', type: 'Cachorro', race: 'Poodle', gender: 'Fêmea', ownerName: 'Fernanda Lima' },
    { id: 7, name: 'Nina', type: 'Gato', race: 'Bengal', gender: 'Fêmea', ownerName: 'Lucas Pereira' },
    { id: 8, name: 'Max', type: 'Cachorro', race: 'Pastor Alemão', gender: 'Macho', ownerName: 'Patrícia Mendes' },
  ];  

export const PetsPage = () => {
  const [pets] = useState(mockPets)

  return (
    <>
      <div>
        <PetsTable
          pets={pets} 
        />
      </div>
    </>
  )
}
