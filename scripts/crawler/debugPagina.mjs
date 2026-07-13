import puppeteer from "puppeteer";


async function debug(){

    const browser =
    await puppeteer.launch({
        headless:false
    });


    const page =
    await browser.newPage();


    await page.goto(
        "https://solancamentosimobiliarios.com.br/imovel/beach-class/",
        {
            waitUntil:"networkidle2"
        }
    );


    await new Promise(resolve =>
        setTimeout(resolve,5000)
    );


    const texto =
    await page.evaluate(() => {

        return document.body.innerText;

    });


    console.log(texto);


}


debug();