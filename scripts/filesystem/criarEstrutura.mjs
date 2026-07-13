import fs from "fs";


export function criarEstrutura(bairro, slug){


const base =
`public/importados/empreendimentos/${bairro}/${slug}`;



fs.mkdirSync(

base,

{
 recursive:true
}

);



return base;


}