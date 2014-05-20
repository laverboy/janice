module.exports = function (app) {

    // home route
    var routes  = require('./controllers/index');
    app.get('/', routes.index);

    // users route
    var users = require('./controllers/user');
    app.get('/api/users', users.all);

}