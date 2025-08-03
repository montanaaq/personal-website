import { useLanguage } from '../../contexts/LanguageContext'

interface IMusicList {
  id: number
  name: string
  img: string
  best: string
  alt: string
  link: string
  duration: string
}

export const useMusicList = (): IMusicList[] => {
  const { t } = useLanguage()

  return [
    {
      id: 1,
      name: t.musicAlbums.nirvana.name,
      img: 'https://upload.wikimedia.org/wikipedia/ru/3/35/Bleach_cover.jpg',
      best: t.musicAlbums.nirvana.best,
      alt: 'playlist_1',
      link: 'https://open.spotify.com/album/1KVGLuPtrMrLlyy4Je6df7?si=nHAj9BV7S7uItISxKRV2Pg',
      duration: t.musicAlbums.nirvana.duration
    },
    {
      id: 2,
      name: t.musicAlbums.blackSabbath.name,
      img: 'https://upload.wikimedia.org/wikipedia/ru/d/da/Black_Sabbath_Paranoid_Cover_Art.png',
      best: t.musicAlbums.blackSabbath.best,
      alt: 'playlist_2',
      link: 'https://open.spotify.com/album/4kA2o0L3tz9vFKJetiFUJI?si=on5gjyoTRIqqj16j1eMb1g',
      duration: t.musicAlbums.blackSabbath.duration
    },
    {
      id: 3,
      name: t.musicAlbums.primus.name,
      img: 'https://i.imgur.com/XbSfk85.png',
      best: t.musicAlbums.primus.best,
      alt: 'playlist_3',
      link: 'https://open.spotify.com/album/3eI0FhygfWcdgI3GZdLXFT?si=4KIL9vZXQzuEts0gD-N4vw',
      duration: t.musicAlbums.primus.duration
    },
    {
      id: 4,
      name: t.musicAlbums.metallica.name,
      img: 'https://upload.wikimedia.org/wikipedia/ru/f/fc/Ride_the_Lightning.jpg',
      best: t.musicAlbums.metallica.best,
      alt: 'playlist_4',
      link: 'https://open.spotify.com/album/05DePtm7oQMdL3Uzw2Jmsc?si=oNb3CSpKTZG0K8Kw9xubIQ',
      duration: t.musicAlbums.metallica.duration
    },
    {
      id: 5,
      name: t.musicAlbums.spotify.name,
      img: 'https://i.imgur.com/IqZLd3b.png',
      best: t.musicAlbums.spotify.best,
      alt: 'playlist_5',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DXbJR1DWfHjWw?si=641f9083eb904928',
      duration: t.musicAlbums.spotify.duration
    },
    {
      id: 6,
      name: t.musicAlbums.redHotChiliPeppers.name,
      img: 'https://m.media-amazon.com/images/I/81lOFvmn6tL._UF1000,1000_QL80_.jpg',
      best: t.musicAlbums.redHotChiliPeppers.best,
      alt: 'playlist_6',
      link: 'https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ?si=xh6liRHPQvCt6QIT6HFRXw',
      duration: t.musicAlbums.redHotChiliPeppers.duration
    }
  ]
}
