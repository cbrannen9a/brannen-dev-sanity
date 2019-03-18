export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skills' } }]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        }
    ]
};
