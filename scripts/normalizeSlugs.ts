import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const propertiesDir = path.resolve(
  __dirname,
  "../src/data/properties"
);

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function processFile(filePath: string) {
  const original = fs.readFileSync(filePath, "utf8");

  const updated = original.replace(
    /slug:\s*"([^"]+)"/g,
    (_match, currentSlug: string) => {
      return `slug: "${slugify(currentSlug)}"`;
    }
  );

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");

    console.log(
      `✓ ${path.basename(filePath)}`
    );

    return 1;
  }

  return 0;
}

const files = fs
  .readdirSync(propertiesDir)
  .filter(
    (file) =>
      file.endsWith(".ts") &&
      file !== "index.ts"
  );

let changedFiles = 0;

for (const file of files) {
  changedFiles += processFile(
    path.join(propertiesDir, file)
  );
}

console.log("");
console.log("Normalização concluída.");
console.log(`Arquivos encontrados: ${files.length}`);
console.log(`Arquivos alterados: ${changedFiles}`);
console.log("");