import ModalBase from "./ModalBase"
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Pet {
  id: number;
  name: string;
  type: string;
  race: string;
  gender: string;
  ownerName: string;
}

interface ModalEditProps {
  pet: Pet;
}

export const ModalEdit = (props: ModalEditProps) => {
  const { pet } = props

  return (
    <ModalBase
      title="Editar Pet"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Edit className="mr-2 h-4 w-4" /> Editar
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <input type="text" defaultValue={pet.name} className="border p-2 rounded" />
        <input type="text" defaultValue={pet.type} className="border p-2 rounded" />
        <input type="text" defaultValue={pet.race} className="border p-2 rounded" />
        <input type="text" defaultValue={pet.gender} className="border p-2 rounded" />
        <input type="text" defaultValue={pet.ownerName} className="border p-2 rounded" />
      </div>
    </ModalBase>
  );
}