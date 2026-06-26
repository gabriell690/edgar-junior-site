import fs from "fs";

const file = "./src/data/properties.ts";

let content = fs.readFileSync(file, "utf8");

// Troca todas as extensões
content = content.replace(/\.jpg/g, ".webp");
content = content.replace(/\.jpeg/g, ".webp");
content = content.replace(/\.png/g, ".webp");

fs.writeFileSync(file, content);

console.log("✅ properties.ts atualizado com sucesso!");