Package.describe({
  name: 'daviz:start-loader',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Show a centered loading spinner while application code is downloading.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DavOnGit/start-loader-meteor-package.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('meteorhacks:inject-initial@1.0.4', ['server']);

  api.addAssets('loader.html', 'server');
  api.addFiles('start-loader.js', ['server', 'client']);
});
