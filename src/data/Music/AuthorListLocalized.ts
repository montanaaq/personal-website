import { useLanguage } from '../../contexts/LanguageContext'

interface AuthorList {
  id: number
  name: string
  img: string
  info: string
  link: string
  alt: string
}

export const useAuthorList = (): AuthorList[] => {
  const { t } = useLanguage()

  return [
    {
      id: 1,
      name: t.musicAuthors.redHotChiliPeppers.name,
      img: 'https://www.pult.ru/upload/iblock/fa8/nb90uuygl9g1h2zd9dxnb7qbh9o0w9j0.jpg',
      info: t.musicAuthors.redHotChiliPeppers.info,
      link: 'https://ru.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
      alt: 'red_hot_chilli_peppers'
    },
    {
      id: 2,
      name: t.musicAuthors.nirvana.name,
      img: 'https://www.rockfm.ru/uploads/photos/1/2020/09/black%20sabbath/nirvana-4ddaf131354a8.jpg',
      info: t.musicAuthors.nirvana.info,
      link: 'https://ru.wikipedia.org/wiki/Nirvana',
      alt: 'nirvana'
    },
    {
      id: 3,
      name: t.musicAuthors.blackSabbath.name,
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Sabs.jpg',
      info: t.musicAuthors.blackSabbath.info,
      link: 'https://ru.wikipedia.org/wiki/Black_Sabbath',
      alt: 'black_sabbath'
    },
    {
      id: 4,
      name: t.musicAuthors.queen.name,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg/1200px-Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg',
      info: t.musicAuthors.queen.info,
      link: 'https://ru.wikipedia.org/wiki/Queen',
      alt: 'queen'
    },
    {
      id: 5,
      name: t.musicAuthors.primus.name,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Primus_copenhagen_1998.jpg/640px-Primus_copenhagen_1998.jpg',
      info: t.musicAuthors.primus.info,
      link: 'https://ru.wikipedia.org/wiki/Primus',
      alt: 'primus'
    }
  ]
}
