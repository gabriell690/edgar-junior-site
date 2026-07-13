import puppeteer from "puppeteer";
import { slug } from "../utils/slug.mjs";
import { log } from "../utils/logger.mjs";

export async function abrirImovel(url){

    log("Lendo:", url);

    const browser = await puppeteer.launch({

        headless:true

    });

    const page = await browser.newPage();

    await page.goto(

        url,

        {

            waitUntil:"networkidle2",

            timeout:60000

        }

    );



    const dados = await page.evaluate(()=>{


        const texto =
            document.body.innerText
            .split("\n")
            .map(x=>x.trim())
            .filter(Boolean);



        const nome = texto[0] ?? "";



        const entrega =
            texto.find(
                x=>x.includes("Entrega")
            ) ?? "";



        const preco =
            texto.find(
                x=>x.includes("R$")
            ) ?? "";



        const descricao =
            texto.find(
                x=>x.includes("Quarto")
                ||
                x.includes("Flat")
                ||
                x.includes("Studio")
            ) ?? "";



        const bairros = [

            "Bessa",
            "Manaíra",
            "Cabo Branco",
            "Altiplano",
            "Intermares",
            "Jardim Oceania",
            "Aeroclube",
            "Brisamar",
            "Camboinha"

        ];



        const bairro =

            bairros.find(

                bairro=>

                texto.includes(bairro)

            ) ?? "";



        let pdf = "";


        document
            .querySelectorAll("iframe")
            .forEach(frame=>{

                const src = frame.src;

                if(

                    src.includes("file=")

                ){

                    const match = src.match(

                        /file=([^#]+)/

                    );

                    if(match){

                        pdf = decodeURIComponent(match[1]);

                    }

                }

            });



        return{

            nome,

            entrega,

            preco,

            descricao,

            bairro,

            pdf

        };



    });



    await browser.close();



    return{

        ...dados,

        slug:slug(dados.nome),

        url

    };

}