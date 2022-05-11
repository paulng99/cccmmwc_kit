export const setupModule = {
    "id": "testing_module_1",
    "name_en": "測驗系統一",
    "name_zh": "Testing Module 1",
    "description_zh": "測驗系統功能",
    "description_en": "Testing Module and functions.",
    "menus": {
        "name_en": "Main Menu 1",
        "name_zh": "主選單 1",
        "link": "/",
    },
}


export const setupFunctions = [
    {
        "id": "function_1",
        "module_id": setupModule.id,
        "p_function_id":"",
        "isGuest":false,
        "isMenu":true,
        "name_en": "function 1",
        "name_zh": "功能一",
        "menus": {
            "name_en": "Function 1 Menu 1",
            "name_zh": "功能 1 選單 1",
            "link": "/",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    }, {
        "id": "function_2",
        "module_id": setupModule.id,
        "p_function_id":"",
        "isGuest":false,
        "isMenu":true,
        "name_en": "function 2",
        "name_zh": "功能二",
        "menus": {
            "name_en": "Function 2 Menu",
            "name_zh": "功能 2 選單",
            "link": "/",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    }
]

