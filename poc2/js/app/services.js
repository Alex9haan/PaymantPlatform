﻿app.service('userService', function () {

    var _users = {
        "data": [
            {
                "id": "1",
                "stripeId": "ch_1C5w8RCMyKESWEHVvdrUF3NY",
                "customerName": "Bianchi Roberto",
                "customerCode": "YVE1000000",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 14:27",
                "requestType": "CH",
                "totalAmount": "2000",
                "grossAmount": "2000",
                "netAmount": "1560",
                "vat": "22",
                "reason": "Yuko1",
                "description": "1: Iscrizione",
                "fee": "83",
                "balanceId": "txn_1C5w8RCMyKESWEHVMcsy5CrI",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "3",
                "stripeId": "ch_1C5wAzCMyKESWEHVqzNVNqJv",
                "customerName": "Bianchi Roberto",
                "customerCode": "YVE1000000",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 14:30",
                "requestType": "CH",
                "totalAmount": "1250",
                "grossAmount": "1250",
                "netAmount": "975",
                "vat": "22",
                "reason": "Yuko2",
                "description": "2: minuto freefloating",
                "fee": "61",
                "balanceId": "txn_1C5wAzCMyKESWEHV9F8PXSkj",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "5",
                "stripeId": "ch_1C5wENCMyKESWEHV6unSNpoN",
                "customerName": "Bianchi Roberto",
                "customerCode": "YVE1000000",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 14:32",
                "requestType": "CH",
                "totalAmount": "1860",
                "grossAmount": "1860",
                "netAmount": "1451",
                "vat": "22",
                "reason": "Yuko3 4",
                "description": "3: minuto freefloating\n4: Supplemento Prelievo in area specifica ",
                "fee": "79",
                "balanceId": "txn_1C5wEOCMyKESWEHVb1ediedN",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "7",
                "stripeId": "ch_1C60S4CMyKESWEHV8AuYwFe9",
                "customerName": "De Verd\u00ec Maria",
                "customerCode": "YVE1000001",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 19:01",
                "requestType": "CH",
                "totalAmount": "2000",
                "grossAmount": "2000",
                "netAmount": "1560",
                "vat": "22",
                "reason": "Yuko 5",
                "description": "5: Iscrizione",
                "fee": "83",
                "balanceId": "txn_1C60S4CMyKESWEHVFhF6Lw0j",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "9",
                "stripeId": "ch_1C60cACMyKESWEHV4XAfrRiu",
                "customerName": "De Verd\u00ec Maria",
                "customerCode": "YVE1000001",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 19:15",
                "requestType": "CH",
                "totalAmount": "500",
                "grossAmount": "500",
                "netAmount": "390",
                "vat": "22",
                "reason": "Yuko 6",
                "description": "6: oraria stationbased",
                "fee": "40",
                "balanceId": "txn_1C60cBCMyKESWEHVt0k8haRk",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "11",
                "stripeId": "ch_1C60cwCMyKESWEHVOfequKa9",
                "customerName": "De Verd\u00ec Maria",
                "customerCode": "YVE1000001",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 19:16",
                "requestType": "CH",
                "totalAmount": "3250",
                "grossAmount": "3250",
                "netAmount": "2535",
                "vat": "22",
                "reason": "Yuko 7",
                "description": "7: stationbased noleggio",
                "fee": "119",
                "balanceId": "txn_1C60cwCMyKESWEHVwDz3ycQD",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "1",
                "stripeId": null,
                "customerName": "De Verd\u00ec Maria",
                "customerCode": "YVE1000001",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 19:23",
                "requestType": "RE",
                "totalAmount": "725",
                "grossAmount": "725",
                "netAmount": "560",
                "vat": "22",
                "reason": "Yuko 8",
                "description": null,
                "fee": null,
                "balanceId": null,
                "balanceStatus": null,
                "balanceDate": null,
                "documentNumber": ""
            },
            {
                "id": "3",
                "stripeId": "re_1C60m4CMyKESWEHVU4rCP1Fi",
                "customerName": "De Verd\u00ec Maria",
                "customerCode": "YVE1000001",
                "splitPayment": "no",
                "requestDate": "15\/03\/2018 19:25",
                "requestType": "RE",
                "totalAmount": "725",
                "grossAmount": "725",
                "netAmount": "560",
                "vat": "22",
                "reason": "Yuko 9",
                "description": "9: Gestione sinistri - Danno al cristallo",
                "fee": "0",
                "balanceId": "txn_1C60m4CMyKESWEHVtxJEu2Ch",
                "balanceStatus": "AVAILABLE",
                "balanceDate": "22\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "13",
                "stripeId": "ch_1C6Gx1CMyKESWEHVR6WUUVUW",
                "customerName": "Shnauss \u00dcrlich",
                "customerCode": "YVE1000002",
                "splitPayment": "no",
                "requestDate": "16\/03\/2018 12:42",
                "requestType": "CH",
                "totalAmount": "2500",
                "grossAmount": "2500",
                "netAmount": "1950",
                "vat": "22",
                "reason": "Yuko 10",
                "description": "10: minuto freefloating",
                "fee": "98",
                "balanceId": "txn_1C6Gx1CMyKESWEHV6Eq3Uwh6",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "15",
                "stripeId": "ch_1C6HrdCMyKESWEHV58UFlgOZ",
                "customerName": "Acme S.r.l.",
                "customerCode": "YVE1000003",
                "splitPayment": "no",
                "requestDate": "16\/03\/2018 13:40",
                "requestType": "CH",
                "totalAmount": "500",
                "grossAmount": "500",
                "netAmount": "390",
                "vat": "22",
                "reason": "Yuko 12",
                "description": "12: oraria stationbased",
                "fee": "32",
                "balanceId": "txn_1C6HrdCMyKESWEHVGkQC2zRS",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "17",
                "stripeId": "ch_1C6HtWCMyKESWEHVFPsw9oGp",
                "customerName": "Acme S.r.l.",
                "customerCode": "YVE1000003",
                "splitPayment": "no",
                "requestDate": "16\/03\/2018 13:42",
                "requestType": "CH",
                "totalAmount": "4550",
                "grossAmount": "4550",
                "netAmount": "4450",
                "vat": "22",
                "reason": "Yuko 13",
                "description": "13: stationbased noleggio",
                "fee": "89",
                "balanceId": "txn_1C6HtWCMyKESWEHV1fvOHr01",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "19",
                "stripeId": "ch_1C6HvxCMyKESWEHVS8sUB74V",
                "customerName": "Acme S.r.l.",
                "customerCode": "YVE1000003",
                "splitPayment": "no",
                "requestDate": "16\/03\/2018 13:44",
                "requestType": "CH",
                "totalAmount": "500",
                "grossAmount": "500",
                "netAmount": "390",
                "vat": "22",
                "reason": "Yuko 14",
                "description": "14: oraria stationbased",
                "fee": "32",
                "balanceId": "txn_1C6HvxCMyKESWEHVYYQ8tdnb",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "24",
                "stripeId": "ch_1C6IozCMyKESWEHVVB4nnHEc",
                "customerName": "Comune di Venezia",
                "customerCode": "YVE1000004",
                "splitPayment": "si",
                "requestDate": "16\/03\/2018 14:41",
                "requestType": "CH",
                "totalAmount": "2730",
                "grossAmount": "3500",
                "netAmount": "2730",
                "vat": "22",
                "reason": "Yuko 17",
                "description": "17: stationbased noleggio",
                "fee": "104",
                "balanceId": "txn_1C6Ip0CMyKESWEHVaTvdsZQL",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            },
            {
                "id": "23",
                "stripeId": "ch_1C6IouCMyKESWEHV1OgmbyNu",
                "customerName": "Comune di Venezia",
                "customerCode": "YVE1000004",
                "splitPayment": "si",
                "requestDate": "16\/03\/2018 14:41",
                "requestType": "CH",
                "totalAmount": "390",
                "grossAmount": "500",
                "netAmount": "390",
                "vat": "22",
                "reason": "Yuko 16",
                "description": "16: oraria stationbased",
                "fee": "36",
                "balanceId": "txn_1C6IouCMyKESWEHVUDAc0WFx",
                "balanceStatus": "PENDING",
                "balanceDate": "23\/03\/2018 01:00",
                "documentNumber": ""
            }
        ],
        "query": {
            "from": "2018-02-26",
            "to": "2018-03-26"
        }
    };

   

    this.getUsers = function () {
        return _users.data;
    };
});