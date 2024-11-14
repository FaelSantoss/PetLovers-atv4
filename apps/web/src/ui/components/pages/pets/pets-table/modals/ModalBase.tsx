import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, FC, useState } from "react";

interface ModalBaseProps {
  title: string;
  triggerButton: ReactNode;
  children: ReactNode;
}

const ModalBase: FC<ModalBaseProps> = ({ title, triggerButton, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Função chamada ao confirmar
  const handleConfirm = () => {
    setIsOpen(false);
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
