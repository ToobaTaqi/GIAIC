import { rule } from "postcss";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: {
        type: "author",
      },
    }),
    // defineField({
    //     name: "tags",
    //     type: "array",
    //     title: "Tags",
    //     of: [

    //     ]
    // })
  ],
});
