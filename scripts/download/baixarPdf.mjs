import fs from "fs";
import path from "path";
import axios from "axios";

export async function baixarPdf(url, pastaDestino) {

    if (!url) {
        throw new Error("URL do PDF não informada.");
    }

    fs.mkdirSync(pastaDestino, {
        recursive: true
    });

    const nomeArquivo = "book.pdf";

    const caminho = path.join(
        pastaDestino,
        nomeArquivo
    );

    const resposta = await axios({
        url,
        method: "GET",
        responseType: "stream"
    });

    await new Promise((resolve, reject) => {

        const writer = fs.createWriteStream(caminho);

        resposta.data.pipe(writer);

        writer.on("finish", resolve);
        writer.on("error", reject);

    });

    return caminho;

}