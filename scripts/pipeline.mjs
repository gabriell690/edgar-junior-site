import path from "path";

import { listarImoveis } from "./crawler/listarImoveis.mjs";
import { abrirImovel } from "./crawler/abrirImovel.mjs";

import { criarEstrutura } from "./filesystem/criarEstrutura.mjs";

import { converterPdf } from "./pdf/converterPdf.mjs";

import { criarPropertyJson } from "./generator/criarPropertyJson.mjs";



export async function executarPipeline(){


    console.log("🚀 Importação iniciada");


    const urls = await listarImoveis();



    console.log(
        `${urls.length} imóveis encontrados`
    );



    for(
        let i = 0;
        i < urls.length;
        i++
    ){


        const url = urls[i];


        console.log(
            `\n[${i+1}/${urls.length}]`
        );


        console.log(
            "Processando:",
            url
        );



        try{


            /*
                1 - Captura dados da página
            */

            const dados =
            await abrirImovel(url);



            if(!dados.pdf){

                console.log(
                    "⚠ Sem PDF:",
                    dados.nome
                );

                continue;

            }



            /*
                2 - Cria estrutura de pastas
            */

            const pasta =
            await criarEstrutura(
                dados
            );



            /*
                3 - Baixa PDF
            */

            const pdfPath =
            path.join(
                pasta,
                "book.pdf"
            );



            if(!dados.pdfBaixado){

                console.log(
                    "PDF:",
                    pdfPath
                );

            }



            /*
                4 - Converte PDF
            */


            const imagens =
            path.join(
                pasta,
                "images"
            );

            console.log(
    "Existe PDF?",
    fs.existsSync(pdfPath)
);

console.log(
    "Tamanho:",
    fs.existsSync(pdfPath)
    ? fs.statSync(pdfPath).size
    : 0
);

            await converterPdf(
                pdfPath,
                imagens
            );



            /*
                5 - Cria property.json
            */


            criarPropertyJson(
                pasta,
                dados
            );



            console.log(
                "✅ Finalizado:",
                dados.nome
            );



        }
        catch(error){


            console.log(
                "❌ Erro:",
                url
            );


            console.log(
                error.message
            );


        }


    }



    console.log(
        "\n🏁 Importação concluída"
    );


}