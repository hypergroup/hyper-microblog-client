/**
 * Module dependencies
 */

var app = module.exports = require('poe-ui')('hyper-microblog-client', [
  require('modal').name
], require);

/**
 * Initialize partials
 */

app.initPartial('header');
app.initPartial('footer');
app.initPartial('sidenav');
app.initPartial('feed');

/**
 * Start app
 */

app.start();
