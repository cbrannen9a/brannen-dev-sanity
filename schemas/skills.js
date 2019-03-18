export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'group',
            title: 'Group',
            type: 'number'
        },
        {
            name: 'subGroup',
            title: 'Sub Group',
            type: 'number'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        }
    ],
    orderings: [
        {
            title: 'Group, Order',
            name: 'groupAsc',
            by: [{ field: 'group', direction: 'asc' }]
        },
        {
            title: 'SubGroup, Order',
            name: 'subGroupAsc',
            by: [{ field: 'subGroup', direction: 'asc' }]
        },
        {
            title: 'Order, Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
};
