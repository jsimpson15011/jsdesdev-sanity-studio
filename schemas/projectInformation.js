export default {
  name: "project",
  type: "document",
  title: "Projects",
  fields:[
    {
      name: "title",
      type: "string",
      title: "Project Title"
    },
    {
      name: "subTitle",
      type: "string",
      title: "Project Subtitle"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "image",
      type: "mainImage",
      title: "Main Project Image",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image"
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Keywords used for filtering projects',
      of: [{
        type: 'reference',
        to: [{type: 'projectTag'}]
      }]
    },
    {
      name: "externalUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }
  ]
}