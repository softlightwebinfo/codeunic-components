module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
export interface ${componentName}Props extends IProps {
    foo: string;
}
`,
  extension: `.types.ts`
});
