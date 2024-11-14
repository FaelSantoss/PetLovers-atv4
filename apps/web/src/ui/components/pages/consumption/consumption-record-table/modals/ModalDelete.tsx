import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsumptionRecord {
  id: number;
  client: string;
  pet: string;
  product: string;
  service: string;
}

interface ModalDeleteProps {
  consumptionRecord: ConsumptionRecord
}
export const ModalDelete = (props: ModalDeleteProps) => {
    const { consumptionRecord } = props

    return (
      <ModalBase
      title="Excluir Serviço"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <p>Tem certeza de que deseja excluir o registro do cliente {consumptionRecord.client}?</p>
      </div>
    </ModalBase>
  );
}
