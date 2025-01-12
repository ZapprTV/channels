const JsonSchemaStaticDocs = require("json-schema-static-docs");

(async () => {
  let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: "schema",
    outputPath: "docs",
    enableMetaEnum: true
  });
  await jsonSchemaStaticDocs.generate();
})();