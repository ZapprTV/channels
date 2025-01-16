const JsonSchemaStaticDocs = await import("json-schema-static-docs");
import { promises as fs } from 'fs';
import { join } from 'path';

const schemaDir = join(process.cwd(), "schema");
const schemaPath = join(schemaDir, "schema.json");
const schemaPromise = await fs.readFile(schemaPath, "utf-8");
const schema = JSON.parse(schemaPromise);

Object.keys(schema.properties.channels.items.properties).forEach(el => {
  if (schema.properties.channels.items.properties[el].anyOf != undefined) delete schema.properties.channels.items.properties[el].anyOf;
});

await fs.writeFile(schemaPath, JSON.stringify(schema, null, 2));

let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
  inputPath: "schema",
  outputPath: "docs",
  enableMetaEnum: true,
  displaySchema: false
});
await jsonSchemaStaticDocs.generate();