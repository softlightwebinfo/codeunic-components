require("colors");
const fs = require("fs");
const components = "./src/components";
const layouts = "./src/layouts";
const views = "./src/views";
const widget = "./src/widgets";
const fileIndex = "index.ts";
const sass = "./src/sass/index.scss";

fs.writeFileSync(sass, "");

Promise.all([
    new Promise((resolve, reject) => fs.readdir(components, (err, files) => {
        let dataImport = "";
        let dataExport = "";
        let dataSass = "";

        files.forEach(file => {
            if (fs.statSync(`${components}/${file}`).isDirectory()) {
                dataImport += `import ${file} from './${file}/${file}';\n`;
                dataExport += `\t${file},\n`;
                dataSass += `@import '../components/${file}/${file}.scss';\n`;
            }

            let data = `${dataImport}export {\n${dataExport}}`;

            fs.writeFileSync(`${components}/${fileIndex}`, data);
        });
        resolve(dataSass);
    })),
    new Promise((resolve) => fs.readdir(widget, (err, files) => {
        let dataImport = "";
        let dataExport = "";
        let dataSass = "";

        files.forEach(file => {
            if (fs.statSync(`${widget}/${file}`).isDirectory()) {
                dataImport += `import ${file} from './${file}/${file}';\n`;
                dataExport += `\t${file},\n`;
                dataSass += `@import '../widgets/${file}/${file}.scss';\n`;
            }

            let data = `${dataImport}export {\n${dataExport}}`;

            fs.writeFileSync(`${widget}/${fileIndex}`, data);
        });
        resolve(dataSass);
    })),
    new Promise((resolve, reject) => fs.readdir(layouts, (err, files) => {
        let dataImport = "";
        let dataExport = "";
        let dataSass = "";

        files.forEach(file => {
            if (fs.statSync(`${layouts}/${file}`).isDirectory()) {
                dataImport += `import ${file} from './${file}/${file}';\n`;
                dataExport += `\t${file},\n`;
                dataSass += `@import '../layouts/${file}/${file}.scss';\n`;
            }

            let data = `${dataImport}export {\n${dataExport}}`;

            fs.writeFileSync(`${layouts}/${fileIndex}`, data);
        });
        resolve(dataSass);

    })),
    new Promise((resolve, reject) => fs.readdir(views, (err, files) => {
        let dataImport = "";
        let dataExport = "";
        let dataSass = "";

        files.forEach(file => {
            if (fs.statSync(`${views}/${file}`).isDirectory()) {
                dataImport += `import ${file} from './${file}/${file}';\n`;
                dataExport += `\t${file},\n`;
                dataSass += `@import '../views/${file}/${file}.scss';\n`;
            }

            let data = `${dataImport}export {\n${dataExport}}`;

            fs.writeFileSync(`${views}/${fileIndex}`, data);
        });
        resolve(dataSass);
    })),
]).then(rs => {
    fs.appendFile(sass, `@import './global.scss';
${rs.join("\n")}
    `, () => console.log("success"));
})
console.log(
    "Successfully created component imports "
);
