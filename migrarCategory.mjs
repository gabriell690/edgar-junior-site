import fs from "fs";
import path from "path";

const pasta = "./src/data/properties";

const arquivos = fs
  .readdirSync(pasta)
  .filter((arquivo) => arquivo.endsWith(".ts"));

for (const arquivo of arquivos) {
  const caminho = path.join(pasta, arquivo);

  let conteudo = fs.readFileSync(caminho, "utf8");

  let alterou = false;

  conteudo = conteudo.replace(
    /description:\s*"([^"]*)",/g,
    (_, categoria) => {
      alterou = true;

      return `category: "${categoria}",
    description: "",`;
    }
  );

  if (alterou) {
    fs.writeFileSync(caminho, conteudo);
    console.log(`✅ ${arquivo} atualizado.`);
  }
}

console.log("🎉 Migração concluída.");