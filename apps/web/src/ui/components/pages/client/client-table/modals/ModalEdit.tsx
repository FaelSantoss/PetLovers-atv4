import ModalBase from "./ModalBase";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Client } from "../../../../../../types/types";
import { useUpdateClient } from "./hooks/use-edit-client";

interface ModalEditProps {
  client: Client;
}

export const ModalEdit = ({ client }: ModalEditProps) => {
  const [nome, setNome] = useState(client.nome);
  const [nomeSocial, setNomeSocial] = useState(client.nomeSocial);
  const [ddd, setDdd] = useState(client.telefones[0].ddd);
  const [numero, setNumero] = useState(client.telefones[0].numero);
  const [codigoPostal, setCodigoPostal] = useState(client.endereco.codigoPostal);

  const updateClient = useUpdateClient();

  const handleSubmit = async () => {
    try {
      const updatedClient: Client = {
        ...client,
        nome,
        nomeSocial,
        endereco: {
          ...client.endereco,
          codigoPostal,
        },
        telefones: [
          {
            ...client.telefones[0],
            ddd,
            numero,
          },
        ],
      };
      await updateClient({ client: updatedClient });

      console.log("Cliente atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  return (
    <ModalBase
      title="Editar Cliente"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Edit className="mr-2 h-4 w-4" /> Editar
        </Button>
      }
      onConfirm={handleSubmit}
    >
      <div className="flex flex-col space-y-1">
        <h2 className="text-sm font-semibold">Nome Completo</h2>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
        />
        <h2 className="text-sm font-semibold">Nome Social</h2>
        <input
          type="text"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
          className="border p-2 rounded"
        />
        <h2 className="text-sm font-semibold">Telefone</h2>
        <div className="flex">
          <input
            type="text"
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
            className="border p-2 rounded w-12 text-center"
          />
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="border p-2 rounded w-40"
          />
        </div>
        <h2 className="text-sm font-semibold">Código Postal</h2>
        <input
          type="text"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
    </ModalBase>
  );
};
