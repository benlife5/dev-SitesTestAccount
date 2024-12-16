import "@yext/visual-editor/style.css";
import {
  Template,
  GetPath,
  // TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { Config, Render } from "@measured/puck";
import { locationConfig } from "../ve.config";
import { applyTheme, VisualEditorProvider } from "@yext/visual-editor";
import { themeConfig } from "../../theme.config";

// export const config = {
//   name: "location",
//   stream: {
//     $id: "location-stream",
//     fields: [
//       "id",
//       "uid",
//       "meta",
//       "slug",
//       "name",
//       "hours",
//       "address",
//       "yextDisplayCoordinate",
//       "additionalHoursText",
//       "mainPhone",
//       "emails",
//       "services",
//     ],
//     localization: {
//       locales: ["en"],
//     },
//   },
//   additionalProperties: {
//     isVETemplate: true,
//   },
// } as const satisfies TemplateConfig;

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
        },
      },
    ],
    other: applyTheme(document, themeConfig),
  };
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `path-${Math.floor(Math.random() * (1000000 - 0) + 0)}`;
};

const Location: Template<TemplateRenderProps> = ({ document }) => {
  // const { visualTemplate } = document;
  console.log("document in location template:", document);
  return (
    <VisualEditorProvider document={document}>
      <Render config={locationConfig as Config} data={document.__.layout} />
    </VisualEditorProvider>
  );
};

export default Location;
