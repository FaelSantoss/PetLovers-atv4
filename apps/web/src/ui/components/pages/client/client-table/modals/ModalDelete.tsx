"use client";
import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Client } from "../../../../../../types/types";
import { useDeleteClient } from "./hooks/use-delete-client";

interface ModalDeleteProps {
  client: Client;
}

export const ModalDelete = (props: ModalDeleteProps) => {
  const { client } = props;
  const deleteClient = useDeleteClient();

  const handleSubmit = async () => {
    if (client.id) {
      try {
        await deleteClient({ id: client.id });
        window.location.reload();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    }
  };

  return (
    <ModalBase
      title="Excluir Cliente"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
      onConfirm={handleSubmit}
    >
      <div className="flex flex-col space-y-4">
        <p>
          Tem certeza de que deseja excluir o cliente <span className="font-bold">{client.nome}</span>?
        </p>
      </div>
    </ModalBase>
  );
};
