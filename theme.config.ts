import { ThemeConfig } from "@yext/visual-editor";

export const themeConfig: ThemeConfig = {
  text: {
    label: "Text",
    styles: {
      font: {
        label: "Font",
        styles: {
          size: {
            label: "Font Size",
            type: "number",
            default: 12,
            plugin: "fontSize",
          },
          captionSize: {
            label: "Caption Size",
            type: "number",
            default: 12,
            plugin: "fontSize",
          },
          family: {
            label: "Font Family",
            plugin: "fontFamily",
            default: "helvetica",
            type: "select",
            options: [
              {
                label: "Helvetica",
                value: "helvetica",
              },
              {
                label: "Times New Roman",
                value: "timesNewRoman",
              },
              {
                label: "Arial",
                value: "arial",
              },
            ],
          },
        },
      },
      color: {
        label: "Color",
        styles: {
          lightMode: {
            label: "Light Mode",
            styles: {
              mainColor: {
                label: "Main Color",
                plugin: "fontColor",
                type: "color",
                default: "black",
              },
              secondaryColor: {
                label: "Secondary Color",
                plugin: "fontColor",
                type: "color",
                default: "grey",
              },
            },
          },
          darkMode: {
            label: "Dark Mode",
            styles: {
              mainColor: {
                label: "Main Color",
                plugin: "fontColor",
                type: "color",
                default: "black",
              },
              secondaryColor: {
                label: "Secondary Color",
                plugin: "fontColor",
                type: "color",
                default: "grey",
              },
            },
          },
        },
      },
    },
  },
  heading: {
    label: "Headings",
    styles: {
      color: {
        label: "Heading Color",
        type: "color",
        plugin: "colors",
        default: "#FF0000",
      },
    },
  },
};
