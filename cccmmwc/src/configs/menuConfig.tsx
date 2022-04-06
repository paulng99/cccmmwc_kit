import { menu, personCircleOutline, home } from 'ionicons/icons'

export const menuConfig: any = [
    {
        "listHeaderName": "Office",
        "listHeaderColor": "secondary",
        "listHeaderIcon": {personCircleOutline},
        "listMenu": [{
            "menuName": "menu11",
            "menuColor": "",
            "menuIcon": {personCircleOutline},
            "menuLink": "/dashboard/home",
            "menuChildren": [
                {
                    "menuName": "test",
                    "menuColor": "",
                    "menuIcon": {personCircleOutline},
                    "menuLink": "/test/",
                }, {
                    "menuName": "submenu112",
                    "menuColor": "",
                    "menuIcon": undefined,
                    "menuLink": undefined,
                }, {
                    "menuName": "submenu113",
                    "menuColor": "",
                    "menuIcon": "",
                    "menuLink": undefined,
                }
            ]
        }, {
            "menuName": "menu12",
            "menuColor": "",
            "menuIcon": "",
            "menuLink": undefined,
            "menuChildren": [
                {
                    "menuName": "submenu121",
                    "menuColor": "primary",
                    "menuIcon": "",
                    "menuLink": undefined,
                }, {
                    "menuName": "submenu122",
                    "menuColor": "",
                    "menuIcon": "",
                    "menuLink": undefined,
                }
            ]
        }]
    }, {
        "listHeaderName": "Header2",
        "listHeaderColor": "danger",
        "listMenu": [{
            "menuName": "menu21",
            "menuColor": "",
            "menuIcon": "",
            "menuLink": undefined,
            "menuChildren": [
                {
                    "menuName": "submenu211",
                    "menuColor": "",
                    "menuIcon": "",
                    "menuLink": undefined,
                }, {
                    "menuName": "submenu212",
                    "menuColor": "",
                    "menuIcon": "",
                    "menuLink": undefined,
                }
            ]
        }]
    }
];