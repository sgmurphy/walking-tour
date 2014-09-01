App = Ember.Application.create();

App.Router.map(function() {
	this.resource('sight', { path: '/sights/:sight_id' });
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return sights;
	}
});

App.SightRoute = Ember.Route.extend({
	model: function(params) {
		return sights[params.sight_id - 1];
	},
	serialize: function(sight) {
		return { sight_id: sight.get('id') };
	}
});