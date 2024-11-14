'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ModalDelete } from "./modals/ModalDelete"
import { ModalAdd } from "./modals/ModalAdd"

interface ConsumptionRecord {
  id: number;
  client: string;
  pet: string;
  product: string;
  service: string;
}

interface ConsumptionRecordTableProps {
  consumptionRecord: ConsumptionRecord[];
}

export const ConsumptionRecordTable = (props: ConsumptionRecordTableProps) => {
    const { consumptionRecord } = props;

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Registro de Consumo</h2>
            <ModalAdd />
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Cliente</TableHead>
                <TableHead className="text-center">Pet</TableHead>
                <TableHead className="text-center">Produtos Consumidos</TableHead>
                <TableHead className="text-center">Serviços Consumidos</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consumptionRecord.map((consumptionRecord) => (
                <TableRow key={consumptionRecord.id}>
                  <TableCell className="text-center">{consumptionRecord.client}</TableCell>
                  <TableCell className="text-center">{consumptionRecord.pet}</TableCell>
                  <TableCell className="text-center">{consumptionRecord.product}</TableCell>
                  <TableCell className="text-center">{consumptionRecord.service}</TableCell>

                  <TableCell className="text-center">
                    <ModalDelete consumptionRecord={consumptionRecord} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default ConsumptionRecordTable;
