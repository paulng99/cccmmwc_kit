export const setupModule = {
    "id": "grouping",
    "name_en": "Grouping",
    "name_zh": "組別",
    "description_zh": "用戶組別模組",
    "description_en": "Grouping Module",
    "menu": {
        "name_en": "Grouping",
        "name_zh": "組別",
        "link": "/",
    },
}


export const setupFunctions = [
    {
        "id": "groups",
        "isMenu":true,
        "module_id": setupModule.id,
        "name_en": "groups",
        "name_zh": "組別",
        "menu": {
            "name_en": "Groups",
            "name_zh": "組別",
            "link": "/",
        },
        "access": {
            "view": ["vp"],
            "edit": ["vp"],
            "add": ["vp"],
            "delete": ["vp"]
        }
    }, {
        "id": "user_grouping",
        "isMenu":true,
        "module_id": setupModule.id,
        "name_en": "User Grouping",
        "name_zh": "用戶組別設定",
        "menu": {
            "name_en": "User Grouping",
            "name_zh": "用戶組別設定",
            "link": "/grouping/user-grouping",
        },
        "access": {
            "view": ["vp"],
            "edit": ["vp"],
            "add": ["vp"],
            "delete": ["vp"]
        }
    },{
        "id": "groups_actions",
        "isMenu":true,
        "module_id": setupModule.id,
        "name_en": "Groups Actions",
        "name_zh": "組別功能設定",
        "menu": {
            "name_en": "Group Actions",
            "name_zh": "組別功能設定",
            "link": "/grouping/group-action",
        },
        "access": {
            "view": ["vp"],
            "edit": ["vp"],
            "add": ["vp"],
            "delete": ["vp"]
        }
    },
]

