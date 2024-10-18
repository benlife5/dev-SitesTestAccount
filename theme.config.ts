import { ThemeConfig } from "@yext/visual-editor";

const getColorOptions = () => {
  return [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Accent", value: "accent" },
    { label: "Text", value: "text" },
    { label: "Background", value: "background" },
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
  section: {
    label: "Section",
    styles: {
      maxContentWidth: {
        label: "Maximum Content Width",
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
        default: "background",
      },
      verticalPadding: {
        label: "Vertical Padding",
        type: "number",
        plugin: "padding",
        default: 64,
      },
    },
  },
  colors: {
    label: "Colors",
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
        type: "color",
        default: "#F7F7F7",
        plugin: "colors",
      },
    },
  },
  headingText: {
    label: "Heading Text",
    styles: {
      textSize: {
        label: "Text Size",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        default: "normal",
        options: getWeightOptions(),
      },
      color: {
        label: "Color",
        type: "select",
        plugin: "textColor",
        options: getColorOptions(),
        default: "primary",
      },
      textTransform: {
        label: "Text Transform",
        type: "select",
        options: getTransformOptions(),
        default: "none",
        plugin: "textTransform",
      },
    },
  },
  bodyText: {
    label: "Body Text",
    styles: {
      textSize: {
        label: "Text Size",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        default: "normal",
        options: getWeightOptions(),
      },
      color: {
        label: "Color",
        type: "select",
        plugin: "textColor",
        options: getColorOptions(),
        default: "primary",
      },
      textTransform: {
        label: "Text Transform",
        type: "select",
        options: getTransformOptions(),
        default: "none",
        plugin: "textTransform",
      },
    },
  },
  button: {
    label: "Buttons",
    styles: {
      textSize: {
        label: "Text Size",
        type: "number",
        plugin: "fontSize",
        default: 12,
      },
      fontWeight: {
        label: "Font Weight",
        type: "select",
        plugin: "fontWeight",
        default: "normal",
        options: getWeightOptions(),
      },
      textTransform: {
        label: "Text Transform",
        type: "select",
        options: getTransformOptions(),
        default: "none",
        plugin: "textTransform",
      },
      borderRadius: {
        label: "Border Radius",
        type: "number",
        plugin: "borderRadius",
        default: 0,
      },
    },
  },
};
