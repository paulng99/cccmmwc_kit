//Can be change by admin
export const info ={
    name_zh:"測驗功能系統",
    name_en:"Testing Functions System",
}


export const menusConfig = {
    mainMenu: {
        menuId: "main menu",
        menuName_zh: "選單",
        menuName_en: "Menu",
        menuLink: null,
    },
    menu1: {
        menuId: "menu1",
        menuName_zh: "選單 1",
        menuName_en: "Menu One",
        menuLink: '/one',
    },
    menu2: {
        menuId: "menu2",
        menuName_zh: "選單 2",
        menuName_en: "Menu Two",
        menuLink: '/two',
    },
    menu3: {
        menuId: "menu3",
        menuName_zh: "選單 3",
        menuName_en: "Menu Three",
        menuLink: '/three',
    }
}

export const accessRight = {
    addFeature: {
        name_zh: "增加功能",
        name_en: "Create Feature in the Module.",
        canReadByUsers: [],
        canReadByGroups:[],
        canWriteByUsers: [],
        canWriteByGroups:[],
        menus: ['menu1', 'menu2'],
    },
    listFeature: {
        name_zh: "列出功能",
        name_en: "List Feature in the Module.",
        canReadByUsers: [],
        canReadByGroups:[],
        canWriteByUsers: [],
        canWriteByGroups:[],
        menus: ['menu1'],
    },
    relatedFeatures:[],
}