export const useDeleteClient = () => {
    const deleteClient = async ({ id }: { id: number }) => {
    try {
      const response = await fetch(`http://localhost:32831/cliente/excluir`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao deletar cliente: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  };

  return deleteClient
}