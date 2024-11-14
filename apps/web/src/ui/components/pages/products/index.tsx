'use client'
import { useState } from 'react'
import ProductsTable from './products-table'

const mockProducts = [
  { id: 1, name: 'Ração para Cães', price: 'R$ 50,00' },
  { id: 2, name: 'Brinquedo para Gatos', price: 'R$ 30,00' },
  { id: 3, name: 'Shampoo para Pets', price: 'R$ 20,00' },
  { id: 4, name: 'Coleira para Cachorros', price: 'R$ 25,00' },
  { id: 5, name: 'Cama para Gatos', price: 'R$ 150,00' },
  { id: 6, name: 'Ração Premium para Gatos', price: 'R$ 80,00' },
  { id: 7, name: 'Brinquedo Mordedor para Cachorros', price: 'R$ 35,00' },
  { id: 8, name: 'Petiscos para Cães', price: 'R$ 15,00' },
];

export const ProductsPage = () => {
  const [products] = useState(mockProducts)

  return (
    <>
      <div>
        <ProductsTable 
          products={products} 
        />
      </div>
    </>
  )
}
