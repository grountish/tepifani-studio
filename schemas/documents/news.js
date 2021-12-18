export default {
  name: "news",
  title: "news",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      title: "title",
      name: "title",
      type: "string",
    },
    {
      title: "mainImage",
      name: "mainImage",
      type: "image",
    },{
      title: "richText",
      name: "richText",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }
  ],
};
