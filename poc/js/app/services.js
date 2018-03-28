app.service('userService', function () {

    var _user = {
        info: {
            name: "Mario",
            lastname: "Rossi",
            email: "m.rossi@mail.it",
            password: "123456",
            address: "Via del Corso 11"
        },
        card: [
            {
                number: "5398 1234 5678 9012",
                expiraction: "12/23",
                cvc: "123"
            },
            {
                number: "4000 8901 2345 6789",
                expiraction: "10/22",
                cvc: "321"
            }
        ],
        payment: {
            email: "m.rossi@mail.it",
            phone: "334-12345678",
            amount: "0,01",
            contractNumber: "123456",
            contractType: "Finanziamento",
            vat:"RSSMRA80A01H501U"

        }
    };

    this.setUser = function (u) {
        _user = u;
    };

    this.getUser = function () {
        return _user;
    };
});
