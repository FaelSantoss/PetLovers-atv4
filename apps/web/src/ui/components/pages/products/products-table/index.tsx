import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ModalEdit } from "./modals/ModalEdit"
import { ModalDelete } from "./modals/ModalDelete"
import { ModalAdd } from "./modals/ModalAdd"

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductsTableProps {
  products: Product[];
}

export const ProductsTable = (props: ProductsTableProps) => {
    const { products } = props;

    return (
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 h-auto p-6 rounded-lg shadow-2xl shadow-[#0f172ab0] bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Lista de Produtos</h2>
            <ModalAdd />
          </div>

          <Table className="bg-white text-primary rounded-lg shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Nome do Produto</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="text-center">{product.name}</TableCell>
                  <TableCell className="text-center">{product.price}</TableCell>
                  <TableCell className="text-center">
                    <ModalEdit product={product} />
                    <ModalDelete product={product} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default ProductsTable;
