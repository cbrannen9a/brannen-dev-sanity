export default {
  type: "object",
  name: "cards",
  title: "Cards",
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
      name: "cards",
      Title: "Cards",
      type: "array",
      of: [
        {
          name: "card",
          type: "card",
        },
      ],
    },
  ],

  preview: {
    select: {
      label: "label",
    },
    prepare({ label }) {
      return {
        title: `Card Section: ${label || "Label not set"}`,
      };
    },
  },
};
