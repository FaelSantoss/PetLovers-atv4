import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Pet {
  id: number;
  name: string;
  type: string;
  race: string;
  gender: string;
  ownerName: string;
}

interface ModalDeleteProps {
  pet: Pet
}
export const ModalDelete = (props: ModalDeleteProps) => {
  const { pet } = props
  return (
    <ModalBase
      title="Excluir Pet"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <p>Tem certeza de que deseja excluir o pet {pet.name}?</p>
      </div>
    </ModalBase>
  );
}
