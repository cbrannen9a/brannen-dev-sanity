export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "route",
      title: "Route",
      type: "reference",
      to: [{ type: "route" }],
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [
        // { type: "pricing" },
        // { type: "uiComponentRef" },
        { type: "hero" },
        { type: "cards" },
        { type: "banner" },
        { type: "social" },
        // { type: "infoRows" },
        // { type: "ctaColumns" },
        // { type: "ctaPlug" },
      ],
    },
  ],
};
