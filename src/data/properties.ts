export interface Property {
  slug: string;
  name: string;
  neighborhood: string;
  location: string;
  price: string;
  delivery: string;
  description: string;
  cover: string;
  images: string[];
}

export const properties: Property[] = [
  {
    slug: "Beach Class",
    name: "Beach Class",
    neighborhood: "Bessa",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$360.000,00",
    delivery: "Entrega Prevista para Dezembro de 2027",
    description: "1, 2 e 3 Quartos",
    cover: "/empreendimentos/beach-class/capa.jpg",
    images: ["/empreendimentos/beach-class/1.jpg",
             "/empreendimentos/beach-class/2.jpg",
             "/empreendimentos/beach-class/3.jpg",
             "/empreendimentos/beach-class/4.jpg",
             "/empreendimentos/beach-class/5.jpg",
             "/empreendimentos/beach-class/6.jpg",],
  },

  {
    slug: "Summer Fit",
    name: "Summer Fit",
    neighborhood: "Bessa",
    location: "Bessa (Beira-Mar) - João Pessoa/PB",
    price: "A partir de R$415.000,00",
    delivery: "Entrega Prevista para Dezembro de 2028",
    description: "Flats",
    cover: "/empreendimentos/summer-fit/capa.jpg",
    images: [],
  },

  {
    slug: "Versa",
    name: "Versa",
    neighborhood: "Bessa",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$329.000,00",
    delivery: "Entrega Prevista para Novembro de 2028",
    description: "Flats",
    cover: "/empreendimentos/versa/capa.jpg",
    images: [
    ],
  },

  {
    slug: "DuoBreeze",
    name: "DuoBreeze",
    neighborhood: "Bessa",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$ 512.000,00",
    delivery: "Entrega prevista para Dezembro de 2028",
    description: "2 Quartos",
    cover: "/empreendimentos/duobreeze/capa.jpg",
    images: [],
  },

  {
    slug: "Ocean View",
    name: "Ocean View",
    neighborhood: "Bessa",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$498.000,00",
    delivery: "Entrega prevista para Agosto de 2028",
    description: "Flats",
    cover: "/empreendimentos/ocean-view/capa.jpg",
    images: [],
  },

  {
    slug: "Green Park Bessa",
    name: "Green Park Bessa",
    neighborhood: "Bessa",
    location: "Bessa- João Pessoa/PB",
    price: "A partir de R$452.000,00",
    delivery: "Entrega Prevista para Dezembro de 2028",
    description: "2 Quartos",
    cover: "/empreendimentos/green-park/capa.jpg",
    images: [],
  },

  {
    slug: "altiplano-residence",
    name: "Altiplano Residence",
    neighborhood: "Altiplano",
    location: "Altiplano - João Pessoa/PB",
    price: "A partir de R$ 730.000",
    delivery: "Abril/2029",
    description: "Apartamentos amplos e exclusivos.",
    cover: "/empreendimentos/altiplano-residence/capa.jpg",
    images: [],
  },

  {
    slug: "mirante-campina",
    name: "Mirante Campina",
    neighborhood: "Catolé",
    location: "Catolé - Campina Grande/PB",
    price: "A partir de R$ 340.000",
    delivery: "Novembro/2027",
    description: "Excelente opção para moradia e investimento.",
    cover: "/empreendimentos/mirante-campina/capa.jpg",
    images: [],
  },
];