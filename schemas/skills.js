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

		},
	]
}
