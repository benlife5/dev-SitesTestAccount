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
import { DocumentProvider } from "@yext/pages/util";
import { Config, Render } from "@measured/puck";
import { locationConfig } from "../ve.config";
import { resolveVisualEditorData, applyTheme } from "@yext/visual-editor";
import { themeConfig } from "../../theme.config";

export const config = {
  name: "location",
  stream: {
    $id: "location-stream",
    filter: {
      entityTypes: ["location"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "slug",
      "visualConfigurations",
      "pageLayouts.visualConfiguration",
      "name",
      "hours",
      "address",
      "c_productSection.sectionTitle",
      "c_productSection.linkedProducts.name",
      "c_productSection.linkedProducts.c_productPromo",
      "c_productSection.linkedProducts.c_description",
      "c_productSection.linkedProducts.c_coverPhoto",
      "c_productSection.linkedProducts.c_productCTA",
      "c_hero",
      "c_faqSection.linkedFAQs.question",
      "c_faqSection.linkedFAQs.answerV2",
      "additionalHoursText",
      "mainPhone",
      "emails",
      "c_deliveryPromo",
    ],
    localization: {
      locales: ["en"],
    },
  },
  additionalProperties: {
    isVETemplate: true,
  },
} as const satisfies TemplateConfig;

export const transformProps = async (data: any) => {
  return resolveVisualEditorData(data, "location");
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
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

const Location: Template<TemplateRenderProps> = ({ document }) => {
  const { visualTemplate } = document;
  console.log("document", document);
  return (
    <DocumentProvider value={document}>
      <Render config={locationConfig as Config} data={visualTemplate} />
    </DocumentProvider>
  );
};

export default Location;
