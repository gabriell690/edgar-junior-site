import { listarImoveis } from "./crawler/listarImoveis.mjs";
import { abrirImovel } from "./crawler/abrirImovel.mjs";
import { criarEstrutura } from "./filesystem/criarEstrutura.mjs";
import { baixarPdf } from "./pdf/baixarPdf.mjs";
import { converterPdf } from "./pdf/converterPdf.mjs";

const links = await listarImoveis();


const dados = await abrirImovel(

links[4]

);



const pasta =
criarEstrutura(

dados.bairro.toLowerCase(),
dados.slug

);



if(dados.pdf){


const destino =
`${pasta}/book.pdf`;


await baixarPdf(

dados.pdf,

destino

);

await converterPdf(

destino,

pasta

);

console.log(

"PDF salvo:",

destino

);


}


console.log(dados);