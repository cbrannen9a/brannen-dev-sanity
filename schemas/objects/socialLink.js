export default {
  type: "object",
  name: "socialLink",
  title: "Social Link",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "link",
    },
    prepare({ title, link }) {
      return {
        title: `Social: ${title || "Title not set"}`,
        link,
      };
    },
  },
};
