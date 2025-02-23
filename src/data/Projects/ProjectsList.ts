interface IProjectsList {
    id: number,
    name: string,
    p: string,
    url: string,
    img: string,
    main_name: string,
    date: string,
    isSupport: boolean,
    link: string,
    source_code?: string
}

export const ProjectsList: IProjectsList[] = [
    {
        "id": 1,
        
        "name": "Бот расписаний занятий",
        "p": "Бот, который позволяет вам просматривать расписание занятий в вашей школе",
        "url": "schedulebot",
        "img":  "https://i.imgur.com/VBSXfjZ.png",
        "main_name": "Schedule Bot",
        "date": "сентябрь 2023",
        "isSupport": true,
        "link": "http://t.me/gymn33_bot"
    },
    {
        "id": 2,
        "name": "Бот онлайн магазина Poizon",
        "p": "Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ",
        "url": "sneaknews",
        "img":  "https://i.imgur.com/9OHFTw6.png",
        "main_name": "SneakNews Bot",
        "date": "октябрь 2023",
        "isSupport": true,
        "link": "http://t.me/sneaknews_bot"
    },
    {
        "id": 3,
        "name": "Бот по подбору университета в вашем городе",
        "p": "Бот, который подбирает вам наилучший вариант в вашем городе, судя по вашим баллам (работает с помощью ChatGPT)",
        "url": "unifinder",
        "img":  "https://i.imgur.com/afWkow6.png",
        "main_name": "UniFinder Bot",
        "date": "ноябрь 2023",
        "isSupport": false,
        "link": "http://t.me/uni_finder_bot"
    },
    {
        "id": 4,
        'name': 'Сайт по подбору университетов',
        'p': 'Сайт, с помощью которого вы сможете найти подходящий вам по баллам и местоположению университет. Написан на React',
        'url': 'uni_finder_website',
        'img': 'https://i.imgur.com/gDLtFUa.png',
        "main_name": "UniFinder Site",
        "date": "декабрь 2023",
        "isSupport": false,
        "link": 'https://uni-finder-mntq.netlify.app',
        "source_code": "https://github.com/montanaaq/uni-finder-website"
    },
    {
        "id": 5,
        "name": "Мой собственный сайт",
        "p": "Сайт с полной информацией о моих крупных проектах, которые я обновляю и по сей день.",
        "url": "my_website",
        "img": "https://i.imgur.com/8xLheCI.png",
        "main_name": "My Personal Site",
        "date": "ноябрь 2023",
        "link": "https://montaanaq.netlify.app",
        "isSupport": true,
        "source_code": "https://github.com/montanaaq/personal-website"
    },
    {
        "id": 6,
        "name": "Игра битвы за место в классе",
        "p": "Бот и сайт в телеграм, с помощью которого можно сразиться за право на место в вашем школьном классе!",
        'url': 'desks_duels',
        'img': 'https://i.imgur.com/aXASI67.jpeg',
        "main_name": "Desks Duels",
        'date': 'декабрь 2024',
        'isSupport': true,
        'link': 'https://t.me/desksduels_bot',
        "source_code": "https://github.com/montanaaq/desks_duels"
    }
]
