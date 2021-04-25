require("colors");
const fs = require("fs");
const components = "./src/components";
const layouts = "./src/layouts";
const fileIndex = "index.ts";

fs.readdir(components, (err, files) => {
    let dataImport = "";
    let dataExport = "";
    files.forEach(file => {
        if (fs.statSync(`${components}/${file}`).isDirectory()) {
            dataImport += `import ${file} from './${file}/${file}';\n`;
            dataExport += `\t${file},\n`;
        }

        let data = `${dataImport}export {\n${dataExport}}`;

        fs.writeFileSync(`${components}/${fileIndex}`, data);
    });
});

fs.readdir(layouts, (err, files) => {
    let dataImport = "";
    let dataExport = "";
    files.forEach(file => {
        if (fs.statSync(`${layouts}/${file}`).isDirectory()) {
            dataImport += `import ${file} from './${file}/${file}';\n`;
            dataExport += `\t${file},\n`;
        }

        let data = `${dataImport}export {\n${dataExport}}`;

        fs.writeFileSync(`${layouts}/${fileIndex}`, data);
    });
});

console.log(
    "Successfully created component imports "
);
