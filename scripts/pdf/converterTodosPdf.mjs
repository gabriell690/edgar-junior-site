import fs from "fs";
import path from "path";

import { converterPdf } from "./converterPdf.mjs";


const origem =
"public/importados/empreendimentos";



function buscarPdfs(pasta){

    let pdfs = [];


    const arquivos =
    fs.readdirSync(
        pasta,
        {
            withFileTypes:true
        }
    );


    for(const arquivo of arquivos){


        const caminho =
        path.join(
            pasta,
            arquivo.name
        );


        if(arquivo.isDirectory()){

            pdfs.push(
                ...buscarPdfs(caminho)
            );

        }



        if(
            arquivo.isFile() &&
            arquivo.name === "book.pdf"
        ){

            pdfs.push(caminho);

        }

    }


    return pdfs;

}



async function iniciar(){


    console.log(
        "🔎 Procurando PDFs..."
    );


    const pdfs =
    buscarPdfs(origem);



    console.log(
        `${pdfs.length} PDFs encontrados`
    );



    for(
        let i = 0;
        i < pdfs.length;
        i++
    ){


        const pdf =
        pdfs[i];


        const pasta =
        path.dirname(pdf);



        const destino =
        path.join(
            pasta,
            "images"
        );



        fs.mkdirSync(
            destino,
            {
                recursive:true
            }
        );



        console.log(
            `\n[${i+1}/${pdfs.length}] Convertendo`
        );


        console.log(pdf);



        try{


            await converterPdf(
                pdf,
                destino
            );


            console.log(
                "✅ Concluído"
            );


        }
        catch(error){


            console.log(
                "❌ Erro:",
                error.message
            );


        }


    }


    console.log(
        "\n🏁 Conversão finalizada"
    );


}


iniciar();