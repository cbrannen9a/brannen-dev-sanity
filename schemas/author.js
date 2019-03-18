export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fieldsets: [{ name: 'social', title: 'Social' }],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: []
                }
            ]
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
            fieldset: 'social'
        },
        {
            name: 'github',
            title: 'GitHub',
            type: 'url',
            fieldset: 'social'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            fieldset: 'social'
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
};
