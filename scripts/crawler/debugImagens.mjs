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


    const imagens =
    await page.evaluate(()=>{


        return Array.from(
            document.querySelectorAll("img")
        )
        .map(img => ({
            
            src: img.src,
            alt: img.alt,
            classe: img.className

        }));


    });



    console.log(
        JSON.stringify(
            imagens,
            null,
            2
        )
    );


    await browser.close();


}


debug();