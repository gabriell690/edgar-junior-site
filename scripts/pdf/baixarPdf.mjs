import fs from "fs";
import path from "path";
import https from "https";


export function baixarPdf(url, destino){


    return new Promise((resolve,reject)=>{


        const arquivo = fs.createWriteStream(destino);



        https.get(url,(response)=>{


            response.pipe(arquivo);



            arquivo.on(
                "finish",
                ()=>{

                    arquivo.close();

                    resolve();

                }
            );


        }).on(
            "error",
            erro=>{

                fs.unlinkSync(destino);

                reject(erro);

            }
        );


    });


}