import * as React from "react";
import { ComponentConfig, Fields } from "@measured/puck";
import { Heading, HeadingProps, headingVariants } from "./atoms/heading.js";
import {
  EntityField,
  YextEntityField,
  YextEntityFieldSelector,
  resolveYextEntityField,
  useDocument,
} from "@yext/visual-editor";

export interface HeadingTextProps extends HeadingProps {
  text: YextEntityField<string>;
}

const HeadingText = React.forwardRef<HTMLHeadingElement, HeadingTextProps>(
  ({ text, ...headingProps }, ref) => {
    const document = useDocument();

    return (
      <EntityField
        displayName={"Heading " + headingProps.level}
        fieldId={text.constantValueEnabled ? "constant value" : text.field}
      >
        <Heading ref={ref} {...headingProps}>
          {resolveYextEntityField(document, text)}
        </Heading>
      </EntityField>
    );
  }
);

HeadingText.displayName = "HeadingText";

const headingTextFields: Fields<HeadingTextProps> = {
  text: YextEntityFieldSelector({
    label: "Entity Field",
    filter: {
      types: ["type.string"],
    },
  }),
  level: {
    type: "number",
    label: "Heading Level",
    min: 1,
    max: 6,
  },
  weight: {
    label: "Font Weight",
    type: "select",
    options: [
      { label: "Default", value: "default" },
      { label: "Thin", value: "thin" },
      { label: "Extra Light", value: "extralight" },
      { label: "Light", value: "light" },
      { label: "Normal", value: "normal" },
      { label: "Medium", value: "medium" },
      { label: "Semibold", value: "semibold" },
      { label: "Bold", value: "bold" },
      { label: "Extrabold", value: "extrabold" },
      { label: "Black", value: "black" },
    ],
  },
  color: {
    label: "Font Color",
    type: "select",
    options: [
      { label: "Default", value: "default" },
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Accent", value: "accent" },
      { label: "Text", value: "text" },
      { label: "Background", value: "background" },
      { label: "Foreground", value: "foreground" },
    ],
  },
  transform: {
    label: "Text Transform",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "lowercase", label: "Lowercase" },
      { value: "uppercase", label: "Uppercase" },
      { value: "capitalize", label: "Capitalize" },
    ],
  },
};

export const HeadingTextComponent: ComponentConfig<HeadingTextProps> = {
  label: "Heading Text",
  fields: headingTextFields,
  defaultProps: {
    text: {
      field: "",
      constantValue: "Text",
      constantValueEnabled: true,
    },
    content: "Heading",
    level: 2,
    weight: "default",
    color: "default",
    transform: "none",
  },
  render: (props) => <HeadingText {...props} />,
};

export { HeadingText, headingVariants };