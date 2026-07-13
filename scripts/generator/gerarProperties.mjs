import fs from "fs";
import path from "path";


const origem =
path.resolve(
    "public/importados/empreendimentos"
);


const dadosArquivo =
path.resolve(
    "scripts/dados/imoveis.json"
);


const destino =
path.resolve(
    "src/data/properties.ts"
);



const dados =
JSON.parse(
    fs.readFileSync(
        dadosArquivo,
        "utf8"
    )
);



function slugTexto(texto){

    return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/\s+/g,"-");

}



function encontrarImagens(
    bairro,
    slug
){

    const pasta =
    path.join(
        origem,
        slugTexto(bairro),
        slug
    );


    if(!fs.existsSync(pasta))
        return [];



    return fs.readdirSync(pasta)

    .filter(
        arquivo =>
        arquivo.endsWith(".webp")
    )

    .sort(
        (a,b)=>
        a.localeCompare(
            b,
            undefined,
            {
                numeric:true
            }
        )
    );

}



let resultado = `

export const properties = [

`;



for(const item of dados){


    const imagens =
    encontrarImagens(
        item.bairro,
        item.slug
    );


    if(!imagens.length)
        continue;



    resultado += `

{
    slug: "${item.slug}",

    name: "${item.nome}",

    neighborhood: "${item.bairro} - João Pessoa/PB",

    location: "${item.bairro} - João Pessoa/PB",

    price: "${item.preco}",

    delivery: "${item.entrega}",

    description: "${item.descricao}",

    cover:
    "/empreendimentos/${slugTexto(item.bairro)}/${item.slug}/capa.webp",

    images: [

${imagens.map(
imagem =>
`"/empreendimentos/${slugTexto(item.bairro)}/${item.slug}/${imagem}"`
)
.join(",\n")}

    ]

},

`;

}



resultado += `

];

`;



fs.writeFileSync(
    destino,
    resultado,
    "utf8"
);



console.log(
    "✅ properties.ts atualizado"
);