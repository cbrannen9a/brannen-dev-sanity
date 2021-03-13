export default {
  type: "object",
  name: "cta",
  title: "Call to action",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [{ type: "route" }],
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "link",
    },
    prepare({ title, link }) {
      return {
        title: `Call to action: ${title || "Title not set"}`,
        link,
      };
    },
  },
};
