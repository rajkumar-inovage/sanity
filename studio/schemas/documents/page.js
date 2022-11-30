// page.js

export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "page",
    type: "document",
    title: "Page",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Titles should be catchy, descriptive, and not too long",
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        description:
          "Some frontends will require a slug to be set to be able to show the post",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
    ],
  };