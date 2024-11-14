import { useState, useEffect } from 'react';
import { Client } from '../../../../types/types'

export const useClientPage = () => {
  const [clientes, setClientes] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:32831/cliente/clientes", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    if (clientes.length === 0) {
      fetchClients();
    }
  }, [clientes]);

  return clientes;
};
