import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            inlineDynamicImports: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
            inlineDynamicImports: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true}),
        postcss(),
        copy({
            targets: [
                {
                    src: "src/sass/variables.scss",
                    dest: "build",
                    rename: "variables.scss"
                },
                {
                    src: "src/sass/typography.scss",
                    dest: "build",
                    rename: "typography.scss"
                },
                {
                    src: "src/sass/placeholder.scss",
                    dest: "build",
                    rename: "placeholder.scss"
                },
                {
                    src: "src/sass/mixin.scss",
                    dest: "build",
                    rename: "mixin.scss"
                },
                {
                    src: "src/sass/animation.scss",
                    dest: "build",
                    rename: "animation.scss"
                },
            ]
        })
    ]
};
