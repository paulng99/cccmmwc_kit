export const setupModule = {
    "id": "grouping",
    "name_en": "Grouping",
    "name_zh": "組別",
    "description_zh": "用戶組別模組",
    "description_en": "Grouping Module",
    "menus": {
        "name_en": "Grouping",
        "name_zh": "組別",
        "link": "/",
    },
}


export const setupFunctions = [
    {
        "id": "groups",
        "module_id": setupModule.id,
        "name_en": "groups",
        "name_zh": "組別",
        "menus": {
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
    },
]

