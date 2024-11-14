import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ModalEdit } from "./modals/ModalEdit"
import { ModalDelete } from "./modals/ModalDelete"
import { ModalAdd } from "./modals/ModalAdd"

interface Service {
  id: number;
  name: string;
  price: string;
}

interface ServicesTableProps {
  services: Service[];
}

export const ServicesTable = (props: ServicesTableProps) => {
    const { services } = props;

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Lista de Serviços</h2>
            <ModalAdd />
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nome do Serviço</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="text-center">{service.name}</TableCell>
                  <TableCell className="text-center">{service.price}</TableCell>
                  <TableCell className="text-center">
                    <ModalEdit service={service} />
                    <ModalDelete service={service} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default ServicesTable;
