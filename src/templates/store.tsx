import "@yext/visual-editor/style.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { Config, Render } from "@measured/puck";
import { storeConfig } from "../ve.config";
import {
  resolveVisualEditorData,
  applyTheme,
  DocumentProvider,
} from "@yext/visual-editor";
import { themeConfig } from "../../theme.config";

export const config = {
  name: "Key Initiative",
  stream: {
    $id: "ki-stream",
    filter: {
      entityTypes: ["keyInitiative"],
    },
    fields: ["id", "uid", "meta", "slug", "name"],
    localization: {
      locales: ["en"],
    },
  },
  additionalProperties: {
    isVETemplate: true,
  },
} as const satisfies TemplateConfig;

export const transformProps = async (data: any) => {
  return resolveVisualEditorData(data, "store");
};

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
  return (
    "store/" +
    (document.slug
      ? document.slug
      : `${document.locale}/${document.address.region}/${document.address.city}/${
          document.address.line1
        }-${document.id.toString()}`)
  );
};

const Store: Template<TemplateRenderProps> = ({ document }) => {
  const { visualTemplate } = document;

  return (
    <DocumentProvider value={document}>
      <Render config={storeConfig as Config} data={visualTemplate} />
    </DocumentProvider>
  );
};

export default Store;
