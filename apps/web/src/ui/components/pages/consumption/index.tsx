import {
  CardContent,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ConsumptionRecordTable from "./consumption-record-table"
import MostConsumedTable from "./most-consumed-table"

const mockConsumptionRecord = [
    {
      id: 1,
      client: 'Ana Silva',
      pet: 'nina',
      product: 'Shampoo para Cachorro',
      service: 'Banho e Tosa',
    },
    {
      id: 2,
      client: 'Ana Silva',
      pet: 'pitucho',
      product: 'Ração para Gato',
      service: 'Consulta Veterinária',
    },
    {
      id: 3,
      client: 'Carlos Souza',
      pet: 'marcos',
      product: 'Ração para Coelho',
      service: 'Vacinação',
    },
    {
      id: 4,
      client: 'Carlos Souza',
      pet: 'zeca',
      product: 'Shampoo para Gato',
      service: 'Exame de Sangue',
    },
    {
      id: 5,
      client: 'Maria José',
      pet: 'bob',
      product: 'Aquário',
      service: 'Tratamento Dental',
    },
    {
      id: 6,
      client: 'Maria José',
      pet: 'totó',
      product: 'Ração para Peixes',
      service: 'Castração',
    },
    {
      id: 7,
      client: 'Pedro Lopes',
      pet: 'caco',
      product: 'Brinquedo para Cachorro',
      service: 'Tosa Completa',
    }
  ];

  const mockMostConsumed = [
    {
      id: 1,
      type: "produto",
      name: "Ração Premium",
      quantity: 50,
    },
    {
      id: 2,
      type: "produto",
      name: "Shampoo para cães",
      quantity: 30,
    },
    {
      id: 3,
      type: "serviço",
      name: "Banho e Tosa",
      quantity: 20,
    },
    {
      id: 4,
      type: "serviço",
      name: "Vacinação",
      quantity: 15,
    },
    {
      id: 5,
      type: "produto",
      name: "Coleira",
      quantity: 25,
    },
    {
      id: 6,
      type: "produto",
      name: "Coleira",
      quantity: 25,
    },
    {
      id: 7,
      type: "produto",
      name: "Coleira",
      quantity: 25,
    },
  ];
  

export function ConsumptionPage() {
  return (
    <Tabs defaultValue="registroConsumo" className="w-full">
      <TabsList className="grid grid-cols-2 w-4/5">
        <TabsTrigger value="registroConsumo">Registro Consumo</TabsTrigger>
        <TabsTrigger value="maisVendidos">Mais Vendidos</TabsTrigger>
      </TabsList>
      <TabsContent value="registroConsumo">
      <CardContent className="space-y-2">
        <ConsumptionRecordTable consumptionRecord={mockConsumptionRecord}/>
      </CardContent>
      </TabsContent>
      <TabsContent value="maisVendidos">
      <CardContent className="space-y-2">
        <MostConsumedTable mostConsumed={mockMostConsumed}/>
      </CardContent>
      </TabsContent>
    </Tabs>
  )
}
