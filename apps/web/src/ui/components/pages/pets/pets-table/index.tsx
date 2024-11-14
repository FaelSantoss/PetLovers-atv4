import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ModalEdit } from "./modals/ModalEdit"
import { ModalDelete } from "./modals/ModalDelete"
import { ModalAdd } from "./modals/ModalAdd"

interface Pet {
  id: number;
  name: string;
  type: string;
  race: string;
  gender: string;
  ownerName: string;
}

interface PetsTableProps {
  pets: Pet[];
}

export const PetsTable = (props: PetsTableProps) => {
    const { pets } = props

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Lista de Pets</h2>
            <ModalAdd />
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nome</TableHead>
                <TableHead className="text-center">Tipo</TableHead>
                <TableHead className="text-center">Raça</TableHead>
                <TableHead className="text-center">Gênero</TableHead>
                <TableHead className="text-center">Nome do Dono</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell className="text-center">{pet.name}</TableCell>
                  <TableCell className="text-center">{pet.type}</TableCell>
                  <TableCell className="text-center">{pet.race}</TableCell>
                  <TableCell className="text-center">{pet.gender}</TableCell>
                  <TableCell className="text-center">{pet.ownerName}</TableCell>

                  <TableCell className="text-center">
                    <ModalEdit pet={pet} />
                    <ModalDelete pet={pet} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default PetsTable;
