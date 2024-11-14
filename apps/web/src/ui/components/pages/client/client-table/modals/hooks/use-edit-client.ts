import { Client } from '../../../../../../../types/types';

interface UpdateClientParams {
  client: Client;
}

export const useUpdateClient = () => {
  const updateClient = async ({ client }: UpdateClientParams) => {
    try {
      const response = await fetch("http://localhost:32831/cliente/atualizar", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar cliente: ${response.statusText}`);
      }

      console.log("Cliente atualizado com sucesso!");

    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    }
  };

  return updateClient;
};
