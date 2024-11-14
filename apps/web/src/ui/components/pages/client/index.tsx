'use client'
import { useState } from 'react'
import ClientTable from './client-table';
import { useClientPage } from './use-client-page';

export const ClientPage = () => {
  const clients = useClientPage()

  return (
    <>
      <div>
        <ClientTable 
          clients={clients} 
        />
      </div>
    </>
  )
}
