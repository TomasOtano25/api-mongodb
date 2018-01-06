"use strict";
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');
function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.SECRET_TOKEN);
}
module.exports = createToken;
//# sourceMappingURL=index.js.map