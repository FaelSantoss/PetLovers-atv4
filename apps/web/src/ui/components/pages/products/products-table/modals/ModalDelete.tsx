import ModalBase from "./ModalBase";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ModalDeleteProps {
  product: Product
}
export const ModalDelete = (props: ModalDeleteProps) => {
  const { product } = props
  return (
    <ModalBase
      title="Excluir Produto"
      triggerButton={
        <Button className="bg-white text-primary hover:bg-white">
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </Button>
      }
    >
      <div className="flex flex-col space-y-4">
        <p>Tem certeza de que deseja excluir o produto {product.name}?</p>
      </div>
    </ModalBase>
  );
}