var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.all = function (req, res) {
    User.find(function (err, users) {
        if (err) { console.error(err); }
        res.jsonp(users)
    });
}