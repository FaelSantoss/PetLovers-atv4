'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MostConsumed {
  id: number;
  type: string;
  name: string;
  quantity: number;
}

interface MostConsumedTableProps {
  mostConsumed: MostConsumed[];
}

export const MostConsumedTable = (props: MostConsumedTableProps) => {
    const { mostConsumed } = props;

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Mais Vendidos</h2>
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nome</TableHead>
                <TableHead className="text-center">Tipo</TableHead>
                <TableHead className="text-center">Quantidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mostConsumed.map((mostConsumed) => (
                <TableRow key={mostConsumed.id}>
                  <TableCell className="text-center">{mostConsumed.name}</TableCell>
                  <TableCell className="text-center">{mostConsumed.type}</TableCell>
                  <TableCell className="text-center">{mostConsumed.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

export default MostConsumedTable;
