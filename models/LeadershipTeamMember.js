var keystone = require('keystone');
var Types = keystone.Field.Types;

var LeadershipTeamMember = new keystone.List('LeadershipTeamMember', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

LeadershipTeamMember.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 200 },
	email: { type: String },
});

LeadershipTeamMember.defaultColumns = 'name';
LeadershipTeamMember.register();
