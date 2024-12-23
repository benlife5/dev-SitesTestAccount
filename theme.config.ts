import { ThemeConfig } from "@yext/visual-editor";

const getColorOptions = () => {
  return [
    { label: "Primary", value: "var(--colors-palette-primary)" },
    { label: "Secondary", value: "var(--colors-palette-secondary)" },
    { label: "Accent", value: "var(--colors-palette-accent)" },
    { label: "Text", value: "var(--colors-palette-text)" },
    { label: "Background", value: "var(--colors-palette-background)" },
  ];
};

const getWeightOptions = () => {
  return [
    { label: "Thin", value: "100" },
    { label: "Extralight", value: "200" },
    { label: "Light", value: "300" },
    { label: "Normal", value: "400" },
    { label: "Medium", value: "500" },
    { label: "Semibold", value: "600" },
    { label: "Bold", value: "700" },
    { label: "Extrabold", value: "800" },
    { label: "Black", value: "900" },
  ];
};

const visualEditorFonts = [
  { label: "Roboto", value: `"Roboto", sans-serif` },
  { label: "Sour Gummy", value: `"Sour Gummy", sans-serif` },
];

const getFontOptions = () => {
  return [
    ...visualEditorFonts,
    { label: "Sans Serif", value: "sans-serif" },
    { label: "Serif", value: "serif" },
    { label: "Monospaced", value: "monospaced" },
  ];
};

export const themeConfig: ThemeConfig = {
  palette: {
    label: "Color Palette",
    styles: {
      primary: {
        label: "Primary",
        type: "color",
        default: "#D83B18",
        plugin: "colors",
      },
      secondary: {
        label: "Secondary",
        type: "color",
        default: "#FFFFFF",
        plugin: "colors",
      },
      accent: {
        label: "Accent",
        type: "color",
        default: "#FFFFFF",
        plugin: "colors",
      },
      text: {
        label: "Text",
        type: "color",
        default: "#000000",
        plugin: "colors",
      },
      background: {
        label: "Background",
        type: "color",
        plugin: "colors",
        default: "#FFFFFF",
      },
    },
  },
  heading1: {
    label: "Heading 1",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 48,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
      fontFamily: {
        label: "Font",
        type: "select",
        plugin: "fontFamily",
        options: getFontOptions(),
        default: "sans-serif",
      },
    },
  },
  heading2: {
    label: "Heading 2",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
      fontFamily: {
        label: "Font",
        type: "select",
        plugin: "fontFamily",
        options: getFontOptions(),
        default: "serif",
      },
    },
  },
  heading3: {
    label: "Heading 3",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
  heading4: {
    label: "Heading 4",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
  heading5: {
    label: "Heading 5",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
  heading6: {
    label: "Heading 6",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      color: {
        label: "Text Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
  body: {
    label: "Body Text",
    styles: {
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 16,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
      color: {
        label: "Text Color",
        plugin: "colors",
        type: "select",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
  grid: {
    label: "Grid Section",
    styles: {
      verticalSpacing: {
        label: "Vertical Spacing",
        type: "number",
        plugin: "gap",
        default: 8,
      },
      maxWidth: {
        label: "Maximum Width",
        type: "select",
        plugin: "maxWidth",
        options: [
          { label: "2XL", value: "1536px" },
          { label: "XL", value: "1280px" },
          { label: "LG", value: "1024px" },
        ],
        default: "1280px",
      },
      backgroundColor: {
        label: "Background Color",
        type: "select",
        plugin: "backgroundColor",
        options: getColorOptions(),
        default: "var(--colors-palette-background)",
      },
    },
  },
  button: {
    label: "Button",
    styles: {
      borderRadius: {
        label: "Border Radius",
        type: "number",
        plugin: "borderRadius",
        default: 20,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
      fontSize: {
        label: "Font Size",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
      backgroundColor: {
        label: "Background Color",
        type: "select",
        plugin: "backgroundColor",
        options: getColorOptions(),
        default: "var(--colors-palette-background)",
      },
      textColor: {
        label: "Text Color",
        plugin: "colors",
        type: "select",
        options: getColorOptions(),
        default: "var(--colors-palette-text)",
      },
    },
  },
};
