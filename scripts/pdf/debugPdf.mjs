import fs from "fs";

const stats = fs.statSync("temp/beach-class/book.pdf");

console.log({
    tamanhoMB: (stats.size / 1024 / 1024).toFixed(2)
});