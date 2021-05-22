module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import "../../sass/variables.scss";
@import "../../sass/typography.scss";

.${componentName} {
  @include font-defaults;

  color: $harvey-green;
}
`,
  extension: `.scss`
});
