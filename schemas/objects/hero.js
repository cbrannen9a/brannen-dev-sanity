export default {
  type: "object",
  name: "hero",
  title: "Hero",
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
      name: "tagline",
      type: "simpleBlockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "figure",
    },
    {
      name: "ctas",
      Title: "CTAS",
      type: "array",
      of: [
        {
          name: "cta",
          type: "cta",
        },
      ],
    },
  ],

  preview: {
    select: {
      label: "label",
      heading: "heading",
    },
    prepare({ label, heading }) {
      return {
        title: `Hero Section: ${label || "Label not set"}`,
        subtitle: `${heading}`,
      };
    },
  },
};
