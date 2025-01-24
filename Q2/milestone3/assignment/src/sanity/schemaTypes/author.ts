import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "authorName",
      type: "string",
      title: "Author Name",
    }),
    defineField({
      name: "about",
      type: "text",
      title: "About",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
