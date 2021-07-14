export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'image',
            title: 'Project Screenshot',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: 'ProjectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    { value: 'personal', title: 'Personal' },
                    { value: 'client', title: 'Client' },
                ]
            }
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                layout: 'tags'
            },
        },
    ]
}