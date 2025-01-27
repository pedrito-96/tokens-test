import StyleDictionary from "style-dictionary";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { propertyFormatNames } from "style-dictionary/enums";

StyleDictionary.registerFormat({
  name: "myCustomFormat",
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options;
    const header = await fileHeader({ file });
    return (
      header +
      "@theme {\n" +
      formattedVariables({
        format: propertyFormatNames.css,
        dictionary,
        outputReferences,
      }) +
      "\n}\n"
    );
  },
});

const sd = new StyleDictionary("config.js");
await sd.buildAllPlatforms();

const myStyleDictionary = new StyleDictionary({
  // configuration
});

await myStyleDictionary.buildAllPlatforms();

// You can also extend Style Dictionary multiple times:
const myOtherStyleDictionary = await myStyleDictionary.extend({
  // new configuration
});

await myOtherStyleDictionary.buildAllPlatforms();
