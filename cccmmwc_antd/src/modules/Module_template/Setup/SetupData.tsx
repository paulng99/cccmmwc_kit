export const setupModule = {
    "id":"testing_module_1",
    "name_en": "測驗系統一",
    "name_zh": "Testing Module 1",
    "description_zh": "測驗系統功能",
    "description_en": "Testing Module and functions.",
    "menus": {
        "name_en": "Main Menu 1",
        "name_zh": "主選單 1"
    }
}

export const setupMenus ={
    "menus": {
        "name_en": "Main Menu 1",
        "name_zh": "主選單 1",
        "submenu":{
            "name_en": "Main Menu 1",
            "name_zh": "主選單 1",
        }
    }
}

export const setupFunctions = {
    "id":"function_1",
    "name_en": "function 1",
    "name_zh": "功能一",
    "link":"/",
    "menus": {
        "name_en": "Main Menu 1",
        "name_zh": "主選單 1",
        "sub_menu": [
            {
                "name_en": "Sub menu 1",
                "name_zh": "副選單1",
                "link":"/",
                "sub_menu": [
                    {
                        "name_en": "Sub menu 1",
                        "name_zh": "副選單1",
                        "link":"/",
                    },
                    {
                        "name_en": "Sub Menu 2",
                        "name_zh": "副選單 2",
                        "link":"/",
                    }
                ],
            },
            {
                "name_en": "Sub Menu 2",
                "name_zh": "副選單 2",
                "link":"/",
            }
        ],
    },
    "canWriteByUsers": [],
    "canReadByGroups": [],
    "canWriteByGroups": [],
    "canReadByUsers": [],
}

