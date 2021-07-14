export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'skills',
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
        {
            name: 'iconUrl',
            type: 'url',
        },
    ]
}