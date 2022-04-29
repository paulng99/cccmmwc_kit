import { doc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const setupModule = {
    "id": "auth",
    "name_en": "User Module",
    "name_zh": "用戶模組",
    "description_zh": "與用戶有關的系統",
    "description_en": "User setting functions",
    "menu": {
        "name_en": "User",
        "name_zh": "用戶",
        "link": "/auth",
    },
}


export const setupFunctions = [
    {
        "id": "login",
        "module_id": setupModule.id,
        "isGuest": false,
        "isMenu": true,
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
        "mudule_ref": doc(db, "modules", setupModule.id),
        "isGuest": false,
        "isMenu": true,
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
