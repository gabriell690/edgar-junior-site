import fs from "fs";
import path from "path";

const ROOT = "./public/empreendimentos";

async function remove(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const filePath = path.join(folder, file);

    if (fs.statSync(filePath).isDirectory()) {
      await remove(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      fs.unlinkSync(filePath);
      console.log("Removido:", filePath);
    }
  }
}

await remove(ROOT);

console.log("Arquivos antigos removidos!");