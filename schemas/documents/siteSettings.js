export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fieldsets: [{ name: "social", title: "Social" }],
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "siteUrl",
      type: "string",
      title: "Site URL",
      description: "Alter with caution as effects sitemaps and rss feeds",
    },
    {
      name: "brand",
      type: "image",
      title: "Brand",
    },
    {
      type: "color",
      name: "primaryColor",
      title: "Primary color",
      description: "Used for Text",
    },
    {
      type: "color",
      name: "accentColor",
      title: "Accent color",
      description: "Used for Links, Menu and highlights",
    },
    {
      type: "color",
      name: "backgroundColor",
      title: "Background color",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
      fieldset: "social",
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
      fieldset: "social",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      fieldset: "social",
    },
  ],
};
