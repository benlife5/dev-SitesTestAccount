import { ThemeConfig } from "@yext/visual-editor";

const getColorOptions = () => {
  return [
    { label: "Primary", value: "var(--colors-palette-primary)" },
    { label: "Secondary", value: "var(--colors-palette-secondary)" },
    { label: "Accent", value: "var(--colors-palette-accent)" },
    { label: "Text", value: "var(--colors-palette-text)" },
    { label: "Background", value: "var(--colors-palette-background-default)" },
    { label: "Foreground", value: "var(--colors-palette-foreground)" },
  ];
};

const getBackgroundColorOptions = () => {
  return [
    { label: "Light", value: "var(--colors-palette-background-light)" },
    { label: "Default", value: "var(--colors-palette-background-default)" },
    { label: "Dark", value: "var(--colors-palette-background-dark)" },
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
        default: "#871900",
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
        plugin: "colors",
        styles: {
          light: {
            label: "Light",
            type: "color",
            default: "#FFFFFF",
          },
          DEFAULT: {
            label: "Default",
            type: "color",
            default: "#F7F7F7",
          },
          dark: {
            label: "Dark",
            type: "color",
            default: "#F0F0F0",
          },
        },
      },
      foreground: {
        label: "Foreground",
        type: "color",
        plugin: "colors",
        default: "#000000",
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
        default: "var(--colors-palette-primary)",
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
        default: "var(--colors-palette-primary)",
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
        default: "var(--colors-palette-primary)",
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
        default: "var(--colors-palette-secondary)",
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
        default: "var(--colors-palette-secondary)",
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
        default: "var(--colors-palette-secondary)",
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
        default: 12,
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
        styles: {
          light: {
            label: "Light Mode",
            type: "select",
            options: getColorOptions(),
            default: "var(--colors-palette-text)",
          },
          dark: {
            label: "Dark Mode",
            type: "select",
            options: getColorOptions(),
            default: "var(--colors-palette-text)",
          },
        },
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
        options: getBackgroundColorOptions(),
        default: "var(--colors-palette-background-default)",
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
      primary: {
        label: "Primary Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-primary)",
      },
      primaryForeground: {
        label: "Primary Foreground Color",
        type: "select",
        plugin: "colors",
        options: getColorOptions(),
        default: "var(--colors-palette-foreground)",
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
    },
  },
  page: {
    label: "Page",
    styles: {
      footer: {
        label: "Footer Background Color",
        type: "color",
        plugin: "backgroundColor",
        default: "#000000",
      },
    },
  },
};
