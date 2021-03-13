export default {
  type: "object",
  name: "social",
  title: "Social",
  fields: [
    {
      name: "label",
      type: "string",
    },
    {
      name: "social",
      Title: "Social",
      type: "array",
      of: [
        {
          name: "socialLink",
          type: "socialLink",
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
        title: `Social Section: ${label || "Label not set"}`,
      };
    },
  },
};
