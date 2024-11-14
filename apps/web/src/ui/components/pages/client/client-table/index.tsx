"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ModalEdit } from "./modals/ModalEdit"
import { ModalDelete } from "./modals/ModalDelete"
import { ModalAdd } from "./modals/ModalAdd"
import { Client } from '../../../../../types/types'

interface ClientTableProps {
  clients: Client[];
}

export const ClientTable = (props: ClientTableProps) => {
    const { clients } = props;

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Lista de Clientes</h2>
            <ModalAdd />
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nome do Cliente</TableHead>
                <TableHead className="text-center">Nome Social</TableHead>
                <TableHead className="text-center">Telefone</TableHead>
                <TableHead className="text-center">Codigo Postal</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="text-center">{client.nome}</TableCell>
                  <TableCell className="text-center">{client.nomeSocial}</TableCell>
                  <TableCell className="text-center">({client.telefones[0].ddd}){client.telefones[0].numero}</TableCell>
                  <TableCell className="text-center">{client.endereco.codigoPostal}</TableCell>

                  <TableCell className="text-center">
                    <ModalEdit client={client} />
                    <ModalDelete client={client} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default ClientTable;
