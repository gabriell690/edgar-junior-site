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
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$360.000,00",
    delivery: " Dezembro de 2027",
    description: "1, 2 e 3 Quartos",
    cover:"/empreendimentos/Bessa/beach-class/capa.jpg",
    images: ["/empreendimentos/Bessa/beach-class/1.jpg",
             "/empreendimentos/Bessa/beach-class/2.jpg",
             "/empreendimentos/Bessa/beach-class/3.jpg",
             "/empreendimentos/Bessa/beach-class/4.jpg",
             "/empreendimentos/Bessa/beach-class/5.jpg",
             "/empreendimentos/Bessa/beach-class/6.jpg",],
  },

  {
    slug: "Summer Fit",
    name: "Summer Fit",
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa (Beira-Mar) - João Pessoa/PB",
    price: "A partir de R$415.000,00",
    delivery: " Dezembro de 2028",
    description: "Flats",
    cover: "/empreendimentos/Bessa/summer-fit/capa.jpg",
    images: [],
  },

  {
    slug: "Versa",
    name: "Versa",
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$329.000,00",
    delivery: " Novembro de 2028",
    description: "Flats",
    cover: "/empreendimentos/Bessa/versa/capa.jpg",
    images: [
    ],
  },

  {
    slug: "DuoBreeze",
    name: "DuoBreeze",
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$ 512.000,00",
    delivery: " Dezembro de 2028",
    description: "2 Quartos",
    cover: "/empreendimentos/Bessa/duobreeze/capa.jpg",
    images: [],
  },

  {
    slug: "Ocean View",
    name: "Ocean View",
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa - João Pessoa/PB",
    price: "A partir de R$498.000,00",
    delivery: " Agosto de 2028",
    description: "Flats",
    cover: "/empreendimentos/Bessa/ocean-view/capa.jpg",
    images: [],
  },

  {
    slug: "Green Park Bessa",
    name: "Green Park Bessa",
    neighborhood: "Bessa - João Pessoa/PB",
    location: "Bessa- João Pessoa/PB",
    price: "A partir de R$452.000,00",
    delivery: "Dezembro de 2028",
    description: "2 Quartos",
    cover: "/empreendimentos/Bessa/green-park/capa.jpg",
    images: [],
  },

  {
    slug: "The Diamond",
    name: "The Diamond",
    neighborhood: "Cabo Branco - João Pessoa/PB",
    location: "Cabo Branco - João Pessoa/PB",
    price: "A partir de R$590.000,00",
    delivery: "Março de 2030",
    description: "Flats",
    cover: "/empreendimentos/cabo-branco/thediamond/capa.jpg",
    images: [],
  },

  {
    slug: "Lumini",
    name: "Lumini",
    neighborhood: "Cabo Branco - João Pessoa/PB",
    location: "Cabo branco - João Pessoa/PB",
    price: "A partir de R$452.000,00",
    delivery: "Julho de 2029",
    description: "flats",
    cover: "/empreendimentos/cabo-branco/lumini/capa.jpg",
    images: [],
  },
];