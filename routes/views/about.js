var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'about';
	var MemberOrg = keystone.list('MemberOrg');
	var LeadershipTeamMember = keystone.list('LeadershipTeamMember');
	locals.data = {
		memberOrgs: [],
		leadershipTeamMembers: [],
	};


	view.on('init', next => {
		var q = MemberOrg.model.find().sort('sortOrder');
		q.exec((err, results) => {
			locals.data.memberOrgs = results;
			next(err);
		});
	});

	view.on('init', next => {
		var q = LeadershipTeamMember.model.find().sort('sortOrder');
		q.exec((err, results) => {
			locals.data.leadershipTeamMembers = results;
			next(err);
		});
	});


	// Render the view
	view.render('about');
};
