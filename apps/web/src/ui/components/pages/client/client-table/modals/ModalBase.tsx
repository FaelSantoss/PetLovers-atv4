import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, FC, useState } from "react";

interface ModalBaseProps {
  title: string;
  triggerButton: ReactNode;
  children: ReactNode;
  onConfirm: () => void; // Nova prop para a função de confirmação
}

const ModalBase: FC<ModalBaseProps> = ({ title, triggerButton, children, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm(); // Chama a função passada por prop
    setIsOpen(false); // Fecha o modal após a ação
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {triggerButton}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <button
          onClick={handleConfirm}
          className="bg-primary text-zinc-50 hover:bg-[#172341] mt-4 px-4 py-2 rounded"
        >
          Confirmar
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalBase;
