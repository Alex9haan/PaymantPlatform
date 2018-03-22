app.service('userService', function () {

    var _user = {
        info: {},
        card: {}

    };

    this.setUser = function (u) {
        _user = u;
    };

    this.getUser = function () {
        return _user;
    };
});