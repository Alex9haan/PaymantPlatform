app.service('userService', function () {

    var _user = {
        info: {
            name: "",
            lastname: "",
            email: "",
            password: "",
            address:""
        }
    };

    this.setUser = function (u) {
        _user = u;
    };

    this.getUser = function () {
        return _user;
    };
});