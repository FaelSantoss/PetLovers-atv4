import { Client } from '../../../../../../../types/types';

interface CreateClientParams {
  client: Client;
}

export const useCreateClient = () => {
  const createClient = async ({ client }: CreateClientParams) => {
    try {
      const response = await fetch("http://localhost:32831/cliente/cadastrar", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });

      if (!response.ok) {
        throw new Error(`Erro ao criar cliente: ${response.statusText}`);
      }

      console.log("Cliente criado com sucesso!");

    } catch (error) {
      console.error('Erro ao criar cliente:', error);
    }
  };

  return createClient;
};