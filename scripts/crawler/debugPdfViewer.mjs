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


    const dados =
    await page.evaluate(()=>{


        const elementos = [];


        document
        .querySelectorAll(
            "iframe, embed, object, a"
        )
        .forEach(el=>{


            elementos.push({

                tag:
                el.tagName,


                src:
                el.src || "",


                data:
                el.data || "",


                href:
                el.href || "",


                texto:
                el.innerText || ""

            });


        });


        return elementos;


    });



    console.log(
        JSON.stringify(
            dados,
            null,
            2
        )
    );


    await browser.close();

}


debug();