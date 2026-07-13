import puppeteer from "puppeteer";


async function debug(){

    const browser =
    await puppeteer.launch({
        headless:true
    });


    const page =
    await browser.newPage();


    await page.goto(
        "https://solancamentosimobiliarios.com.br/imovel/beach-class/",
        {
            waitUntil:"networkidle2"
        }
    );


    const links =
    await page.evaluate(()=>{


        return Array.from(
            document.querySelectorAll("a")
        )
        .map(a=>a.href)
        .filter(href =>
            href.includes(".pdf")
        );


    });


    console.log(links);


    await browser.close();

}


debug();