export default {
  type: "object",
  name: "card",
  title: "Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "simpleBlockContent",
    },
    {
      name: "cta",
      title: "CTA",
      type: "cta",
    },
    {
      name: "enabled",
      title: "Enabled",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "cta.title",
      link: "cta.link",
    },
    prepare({ title, subtitle, link }) {
      return {
        title: `Card: ${title || "Title not set"}`,
        subtitle,
        link,
      };
    },
  },
};
