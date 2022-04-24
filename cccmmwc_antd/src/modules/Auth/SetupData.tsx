export const setupModule = {
    "id": "auth",
    "name_en": "User Module",
    "name_zh": "用戶模組",
    "description_zh": "與用戶有關的系統",
    "description_en": "User setting functions",
    "menus": {
        "name_en": "User",
        "name_zh": "用戶",
        "link": "/auth",
    },
}


export const setupFunctions = [
    {
        "id": "login",
        "module_id": setupModule.id,
        "isGuest":false,
        "isMenu":true,
        "name_en": "Login",
        "name_zh": "登入",
        "menu": {
            "name_en": "User Login",
            "name_zh": "用戶登入",
            "link": "/auth/login",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    }, {
        "id": "logout",
        "module_id": setupModule.id,
        "isGuest":false,
        "isMenu":true,
        "name_en": "Logout",
        "name_zh": "登出",
        "menu": {
            "name_en": "User Logout",
            "name_zh": "用戶登出",
            "link": "/auth/logout",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    }
]

export const setupActions = [
/*     {
        "id": "action 1",
        "name_en": "Action 1",
        "functionId": "function_1",
        "module_id": "testing_module_1",
        "menus": {
            "name_en": "Action 1 Menu 1",
            "name_zh": "行動 1 選單 1",
            "link": "/",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    }, {
        "id": "action 2",
        "name_en": "Action 2",
        "functionId": "function_1",
        "module_id": "testing_module_1",
        "menus": {
            "name_en": "Action 2 Menu",
            "name_zh": "行動 2 選單",
            "link": "/",
        },
        "access": {
            "view": [],
            "edit": [],
            "add": [],
            "delete": []
        }
    } */
];