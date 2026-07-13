import puppeteer from "puppeteer";
import { log } from "../utils/logger.mjs";


const URL =
    "https://solancamentosimobiliarios.com.br/imoveis-em-joao-pessoa/";


export async function listarImoveis() {

    log("Abrindo página de imóveis...");

    const browser = await puppeteer.launch({

        headless: true

    });

    const page = await browser.newPage();

    await page.goto(

        URL,

        {

            waitUntil: "networkidle2",
            timeout: 60000

        }

    );



    const links = await page.evaluate(() => {

        const urls = new Set();

        document
            .querySelectorAll("a")
            .forEach(a => {

                const href = a.href;

                if (

                    href &&
                    href.includes("/imovel/")

                ) {

                    urls.add(href);

                }

            });

        return [...urls];

    });



    await browser.close();

    log(`${links.length} imóveis encontrados`);

    return links;

}