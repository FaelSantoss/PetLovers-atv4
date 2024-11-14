import ModalBase from "./ModalBase";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateClient } from "./hooks/use-create-client";

let currentId = 5;

export const ModalAdd = () => {
  const createClient = useCreateClient();
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [ddd, setDdd] = useState("");
  const [numero, setNumero] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  const handleSubmit = async () => {
    const clientId = currentId++

    const client = {
      id: clientId,
      nome,
      nomeSocial,
      email: null,
      endereco: {
        codigoPostal,
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        informacoesAdicionais: "",
      },
      telefones: [
        {
          id: currentId++,
          numero,
          ddd,
        },
      ],
    };

    try {
      await createClient({ client });
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  };

  return (
    <ModalBase
      title="Adicionar Novo Cliente"
      triggerButton={
        <Button className="bg-primary text-zinc-50 hover:bg-[#172341] p-2 md:p-3 flex items-center text-sm md:text-base">
          <Plus className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
          <span className="hidden sm:inline">Adicionar Cliente</span>
        </Button>
      }
      onConfirm={handleSubmit}
    >
      <div className="flex flex-col space-y-1">
        <h2 className="text-sm font-semibold">Nome Completo</h2>
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <h2 className="text-sm font-semibold">Nome Social</h2>
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Nome"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
        />
        <h2 className="text-sm font-semibold">Telefone</h2>
        <div className="flex">
          <input
            type="text"
            className="border p-2 rounded w-12 text-center"
            placeholder="DDD"
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded w-40"
          placeholder="Numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <h2 className="text-sm font-semibold">Código Postal</h2>
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Codigo Postal"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
      </div>
    </ModalBase>
  );
};
