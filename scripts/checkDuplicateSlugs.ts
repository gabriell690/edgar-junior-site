import { properties } from "../src/data/properties/index";

const grouped = new Map<string, typeof properties>();

for (const property of properties) {
  const slug = property.slug.trim();

  const existing = grouped.get(slug) ?? [];
  existing.push(property);
  grouped.set(slug, existing);
}

const duplicates = [...grouped.entries()].filter(
  ([, items]) => items.length > 1
);

console.log("");
console.log(`Total de imóveis: ${properties.length}`);
console.log(`Slugs únicos: ${grouped.size}`);

if (duplicates.length === 0) {
  console.log("✓ Nenhum slug duplicado encontrado.");
  console.log("");
  process.exit(0);
}

console.log("");
console.log(`⚠ ${duplicates.length} slug(s) duplicado(s):`);
console.log("");

for (const [slug, items] of duplicates) {
  console.log(`/${slug}`);

  for (const property of items) {
    console.log(
      `  - ${property.name} | ${property.neighborhood} | ${property.location}`
    );
  }

  console.log("");
}

process.exit(1);