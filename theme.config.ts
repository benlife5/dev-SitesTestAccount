import { ThemeConfig } from "@yext/visual-editor";

const getColorOptions = () => {
  return [
    { label: "Primary", value: "var(--colors-primary)" },
    { label: "Secondary", value: "var(--colors-secondary)" },
    { label: "Accent", value: "var(--colors-accent)" },
    { label: "Text", value: "var(--colors-text)" },
    { label: "Background", value: "var(--colors-background)" },
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

const getTransformOptions = () => {
  return [
    { label: "None", value: "none" },
    { label: "Uppercase", value: "uppercase" },
    { label: "Lowercase", value: "lowercase" },
    { label: "Capitalize", value: "capitalize" },
  ];
};

export const themeConfig: ThemeConfig = {
  fontSize: {
    label: "Text Size",
    styles: {
      heading1: {
        label: "Heading 1",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      heading2: {
        label: "Heading 2",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      heading3: {
        label: "Heading 3",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      heading4: {
        label: "Heading 4",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      heading5: {
        label: "Heading 5",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      heading6: {
        label: "Heading 6",
        type: "number",
        plugin: "fontSize",
        default: 24,
      },
      button: {
        label: "Button",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
      body: {
        label: "Body",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
    },
  },
  fontWeight: {
    label: "Font Weight",
    styles: {
      heading1: {
        label: "Heading 1",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      heading2: {
        label: "Heading 2",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "700",
      },
      heading3: {
        label: "Heading 3",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "600",
      },
      heading4: {
        label: "Heading 4",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "600",
      },
      heading5: {
        label: "Heading 5",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
      heading6: {
        label: "Heading 6",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
      body: {
        label: "Body",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
      button: {
        label: "Button",
        type: "select",
        plugin: "fontWeight",
        options: getWeightOptions(),
        default: "400",
      },
    },
  },
  // textTransform: {
  //   label: "Text Transform",
  //   styles: {
  //     h1: {
  //       label: "h1",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     h2: {
  //       label: "h2",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     h3: {
  //       label: "h3",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     h4: {
  //       label: "h4",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     h5: {
  //       label: "h5",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     h6: {
  //       label: "h6",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     body: {
  //       label: "Body",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //     button: {
  //       label: "Button",
  //       type: "select",
  //       plugin: "textTransform",
  //       options: getTransformOptions(),
  //       default: "none",
  //     },
  //   },
  // },
  // colors: {
  //   label: "Color",
  //   styles: {
  //     primary: {
  //       label: "Primary",
  //       type: "color",
  //       default: "#D83B18",
  //       plugin: "colors",
  //     },
  //     secondary: {
  //       label: "Secondary",
  //       type: "color",
  //       default: "#871900",
  //       plugin: "colors",
  //     },
  //     accent: {
  //       label: "Accent",
  //       type: "color",
  //       default: "#FFFFFF",
  //       plugin: "colors",
  //     },
  //     text: {
  //       label: "Text",
  //       type: "color",
  //       default: "#000000",
  //       plugin: "colors",
  //     },
  //     background: {
  //       label: "Background",
  //       type: "color",
  //       default: "#F7F7F7",
  //       plugin: "colors",
  //     },
  //     h1: {
  //       label: "h1",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     h2: {
  //       label: "h2",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     h3: {
  //       label: "h3",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     h4: {
  //       label: "h4",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     h5: {
  //       label: "h5",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     h6: {
  //       label: "h6",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     body: {
  //       label: "Body",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //     button: {
  //       label: "Button",
  //       type: "select",
  //       plugin: "color",
  //       options: getColorOptions(),
  //       default: "var(--colors-primary)",
  //     },
  //   },
  // },
};
