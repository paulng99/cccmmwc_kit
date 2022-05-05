import { doc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const setupModule = {
    "id": "app",
    "name_en": "Appication Module",
    "name_zh": "應用模組",
    "description_zh": "應用系統",
    "description_en": "User setting functions",
    "menu": {
        "name_en": "App",
        "name_zh": "應用",
        "link": "/",
    },
}


export const setupFunctions = [
    {
        "id": "test",
        "module_id": setupModule.id,
        "isGuest": false,
        "isMenu": true,
        "name_en": "Test",
        "name_zh": "測試",
        "menu": {
            "name_en": "Testing App",
            "name_zh": "系統測試",
            "link": "/test",
        },
        "access": {
            "view": ["vp"],
            "edit": [],
            "add": [],
            "delete": []
        }
    },     {
        "id": "setup",
        "module_id": setupModule.id,
        "isGuest": false,
        "isMenu": true,
        "name_en": "Setup",
        "name_zh": "設定",
        "menu": {
            "name_en": "App Setup",
            "name_zh": "系統設定",
            "link": "/app/setup",
        },
        "access": {
            "view": ["vp",'guest'],
            "edit": [],
            "add": [],
            "delete": []
        }
    }, 
]
