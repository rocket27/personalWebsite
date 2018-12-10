const MENU_ITEMS = [
    {
        menuItem: 'Обо мне',
        type: 'redirect',
        stateName: '/about',
        iconPath: './assets/images/svg/person.svg',
    },
    {
        menuItem: 'Собственные проекты',
        type: 'redirect',
        stateName: '/own-projects',
        iconPath: './assets/images/svg/work.svg',
    },
    {
        menuItem: 'Коммерческие проекты',
        type: 'redirect',
        stateName: '/production-projects',
        iconPath: './assets/images/svg/business.svg',
    },
    {
        menuItem: 'Контакты',
        type: 'button',
        iconPath: './assets/images/svg/email.svg',
    },
];

export default MENU_ITEMS;
