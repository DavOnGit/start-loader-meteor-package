// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-start-loader-tests.js for an example of importing.
if (Meteor.isServer) {
	Inject.rawHead("loader", Assets.getText('loader.html'));
}

if (Meteor.isClient) {
	Meteor.startup(function() {
		setTimeout(function() {
			$("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });
		}, 500);
	});
}
