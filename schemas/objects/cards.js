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
