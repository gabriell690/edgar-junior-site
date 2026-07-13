import fs from "fs";
import path from "path";
import pdf from "pdf-poppler";
import sharp from "sharp";


export async function converterPdf(pdfPath, destino){


   const imagesDir = destino;


    fs.mkdirSync(
        imagesDir,
        {
            recursive:true
        }
    );


    const temp =
        path.join(
            destino,
            "temp"
        );


    fs.mkdirSync(
        temp,
        {
            recursive:true
        }
    );



    console.log(
        "Convertendo PDF:",
        pdfPath
    );



    const options = {

        format:"png",

        out_dir:temp,

        out_prefix:"pagina",

        page:null,

        scale:300

    };



    await pdf.convert(
        pdfPath,
        options
    );



    const arquivos =
        fs.readdirSync(temp)
        .filter(
            file =>
            file.endsWith(".png")
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



    console.log(
        `${arquivos.length} páginas renderizadas`
    );



    let contador = 1;



    for(
        const arquivo of arquivos
    ){


        const nome =

        contador === 1

        ? "capa.webp"

        : `${contador-1}.webp`;



        await sharp(
            path.join(
                temp,
                arquivo
            )
        )
        .resize({

            width:2200,

            withoutEnlargement:true

        })
        .webp({

            quality:95,

            effort:6

        })
        .toFile(

            path.join(
                imagesDir,
                nome
            )

        );


        contador++;

    }



    fs.rmSync(
        temp,
        {
            recursive:true,
            force:true
        }
    );


    console.log(
        "Conversão concluída:",
        contador-1,
        "imagens"
    );

}