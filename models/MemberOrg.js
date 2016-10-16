var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * MemberOrg Model
 * ==========
 */

var MemberOrg = new keystone.List('MemberOrg', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

MemberOrg.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 200 },
});

MemberOrg.defaultColumns = 'title';
MemberOrg.register();
