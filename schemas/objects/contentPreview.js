export default {
  type: "object",
  name: "contentPreview",
  title: "Content Preview",
  fields: [
    {
      name: "label",
      type: "string",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subHeading",
      type: "string",
      title: "Sub Heading",
    },
    {
      name: "ariaHeading",
      type: "string",
      title: "Aria Heading",
    },
    {
      name: "maxItems",
      title: "Max Items",
      type: "number",
      validation: (Rule) => Rule.required().min(0).positive(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Posts", value: "posts" },
          { title: "Projects", value: "projects" },
        ],
      },
    },
  ],

  preview: {
    select: {
      label: "label",
      heading: "heading",
    },
    prepare({ label, heading }) {
      return {
        title: `Content Preview Section: ${label || "Label not set"}`,
        subtitle: `${heading}`,
      };
    },
  },
};
