import { parseArgs } from "util";
import fs from "fs/promises";
import path from "path";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from "svgdom";
import { imageSizeFromFile } from "image-size/fromFile";
import { optimize } from "svgo";

const { values } = parseArgs({
	args: Bun.argv,
	options: {
		country: {
			type: "string",
            multiple: false
		}
	},
	strict: true,
	allowPositionals: true,
});
const country = values["country"];
let finalJSON = {};

console.log("Genero i ratio per gli SVG...")
const svgs = (await fs.readdir(path.join(__dirname, `logos/${country}`))).filter(file => file.endsWith(".svg"));
for (const svg of svgs) {
    const window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);
    
    const svgCode = await fs.readFile(path.join(__dirname, `logos/${country}`, svg), "utf-8");
    const optimized = optimize(svgCode, {
        multipass: true,
        plugins: ["removeDimensions", "removeDoctype", "removeComments", "removeMetadata", "removeXMLProcInst", "cleanupAttrs", "convertStyleToAttrs", "removeUselessDefs", "sortAttrs"]
    });

    const draw = SVG(optimized.data);
    const bbox = draw.viewbox();
    const ratio = Math.round(((bbox.height / bbox.width) + Number.EPSILON) * 10000) / 10000;
    finalJSON[svg] = ratio;
    console.log(`[${svgs.indexOf(svg) + 1}/${svgs.length}] ${svg}: ${ratio}`);
};

console.log("\nGenero i ratio per i PNG...")
const pngs = (await fs.readdir(path.join(__dirname, `logos/${country}`))).filter(file => file.endsWith(".png"));
for (const png of pngs) {
    const dimensions = await imageSizeFromFile(path.join(__dirname, `logos/${country}`, png));
    const pngName = png.replaceAll(".png", "");
    const ratio = Math.round(((dimensions.height / dimensions.width) + Number.EPSILON) * 10000) / 10000;
    finalJSON[pngName] = ratio;
    console.log(`[${pngs.indexOf(png) + 1}/${pngs.length}] ${png}: ${ratio}`);
};

await fs.writeFile(path.join(__dirname, `logos/${country}/_ratios.json`), JSON.stringify(finalJSON, null));

console.log("\n✅  Fatto!");