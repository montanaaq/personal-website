interface AuthorList {
    id: number
    name: string
    img: string
    info: string
    link: string
    alt: string
}

const AuthorList: AuthorList[] = [
    {
        id: 1,
        name: '1. Red Hot Chilli Peppers',
        img: 'https://www.pult.ru/upload/iblock/fa8/nb90uuygl9g1h2zd9dxnb7qbh9o0w9j0.jpg',
        info: 'Американская рок-группа, образованная в 1983 году в Калифорнии вокалистом Энтони Кидисом, басистом Майклом Бэлзари (известным как Фли). Играют в жанре: рок, фанк',
        link: 'https://ru.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
        alt: 'red_hot_chilli_peppers'
    },
    {
        id: 2,
        name: '2. Nirvana',
        img: 'https://www.rockfm.ru/uploads/photos/1/2020/09/black%20sabbath/nirvana-4ddaf131354a8.jpg',
        info: 'Американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем, также барабанщиком Дэйвом Гроллом. Играют в жанре: гранж, рок',
        link: 'https://ru.wikipedia.org/wiki/Nirvana',
        alt: 'nirvana'
    },
    {
        id: 3,
        name: '3. Black Sabbath',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Sabs.jpg',
        info: 'Британская рок-группа, образованная в Бирмингеме, Англия, в 1968 году и оказавшая значительное влияние на развитие рок-музыки, прежде всего, хеви-метала. Играют в жанре: хэви метал, классический метал',
        link: 'https://ru.wikipedia.org/wiki/Black_Sabbath',
        alt: 'black_sabbath'
    },
    {
        id: 4,
        name: '4. Queen',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg/1200px-Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg',
        info: 'Британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки. Играют в жанре: рок, оперный-рок',
        link: 'https://ru.wikipedia.org/wiki/Queen',
        alt: 'queen'
    },
    {
        id: 5,
        name: '5. Primus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Primus_copenhagen_1998.jpg/640px-Primus_copenhagen_1998.jpg',
        info: 'Американская альтернативная метал-группа, трио, основанное в середине 1980-х годов. Бессменный лидер группы — фронтмен, вокалист и бас-гитарист Лес Клейпул. Играют в жанре: ню метал, преобладает бас гитара',
        link: 'https://ru.wikipedia.org/wiki/Primus',
        alt: 'primus'
    }

]

export default AuthorList