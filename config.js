import { transformGroups } from "style-dictionary/enums";

export default {
  source: ["tokens/design-tokens.tokens.json"],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: "assets/css/",
      files: [
        {
          destination: "theme.css",
          format: "myCustomFormat",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
