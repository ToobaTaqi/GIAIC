import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) =>
        Rule.required().max(15).warning("Title should be under 15 characters"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "originalprice",
      type: "number",
      title: "Original Price",
      initialValue: 0,
    }),
    defineField({
      name: "saleprice",
      type: "number",
      title: "Sale Price",
      initialValue: 0,
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured",
    }),
  ],
});
