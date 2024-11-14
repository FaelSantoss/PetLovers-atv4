import ModalBase from "./ModalBase";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ModalAdd = () => {
    return (
      <ModalBase
      title="Adicionar Novo Serviço"
      triggerButton={
        <Button className="bg-primary text-zinc-50 hover:bg-[#172341] p-2 md:p-3 flex items-center text-sm md:text-base">
        <Plus className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
        <span className="hidden sm:inline">Adicionar Serviço</span>
      </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Nome do Serviço" className="border p-2 rounded" />
        <input type="text" placeholder="Preço" className="border p-2 rounded" />
      </div>
    </ModalBase>
  );
}
