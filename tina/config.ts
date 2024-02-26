import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch : "master",

  // Get this from tina.io
  clientId: "165fed9e-7e74-402b-8682-e8df097ef292",
  // Get this from tina.io
  token: "fe29338b19209438472ba184280ab765a0aaa5cc",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },

          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
          },
          
          {
            type: 'string',
            name: "tags",
            label: 'Tags',
            description: 'Tags for this post',
            // list: true,
            // ui: {
            //   component: 'tags',
            // }
        
          },


          {
            name: 'featured',
            label: 'featured',
            type: 'boolean',
          },

          {
            name: 'tranding',
            label: 'tranding',
            type: 'boolean',
          },

          {
            type: "string",
            name: "readTime",
            label: "readTime",
          },
        
          {
            type: 'image',
            label: 'thumbnail',
            name: 'thumbnail',
          },

          {
            type: 'image',
            label: 'featureImage',
            name: 'featureImage',
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
