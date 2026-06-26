import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = "./public/empreendimentos";

console.log("Pasta existe?", fs.existsSync(ROOT));

async function convertFolder(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const filePath = path.join(folder, file);

    if (fs.statSync(filePath).isDirectory()) {
      await convertFolder(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (![".jpg", ".jpeg", ".png"].includes(ext)) {
      continue;
    }

    const output = filePath.replace(ext, ".webp");

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(output);

    console.log("✔", output);
  }
}

await convertFolder(ROOT);

console.log("Conversão finalizada!");