interface IMusicList {
  id: number
  name: string
  img: string
  best: string
  alt: string
  link: string
  duration: string
}

export const MusicList: IMusicList[] = [
  {
    id: 1,
    name: 'Nirvana - Bleach',
    img: 'https://upload.wikimedia.org/wikipedia/ru/3/35/Bleach_cover.jpg',
    best: 'Bleach, Floyd the Barber, Love Buzz',
    alt: 'playlist_1',
    link: 'https://open.spotify.com/album/1KVGLuPtrMrLlyy4Je6df7?si=nHAj9BV7S7uItISxKRV2Pg',
    duration: '13 треков, 42 мин. 45 сек.'
  },
  {
    id: 2,
    name: 'Black Sabbath - Paranoid',
    img: 'https://upload.wikimedia.org/wikipedia/ru/d/da/Black_Sabbath_Paranoid_Cover_Art.png',
    best: 'Paranoid, Iron Man, War Pigs',
    alt: 'playlist_2',
    link: 'https://open.spotify.com/album/4kA2o0L3tz9vFKJetiFUJI?si=on5gjyoTRIqqj16j1eMb1g',
    duration: '8 треков, 41 мин. 46 сек.'
  },
  {
    id: 3,
    name: "Primus - They Can't All Be Zingers",
    img: 'https://i.imgur.com/XbSfk85.png',
    best: 'My Name Is Mud, Tommy The Cat, Jerry Was A Race Car Driver',
    alt: 'playlist_3',
    link: 'https://open.spotify.com/album/3eI0FhygfWcdgI3GZdLXFT?si=4KIL9vZXQzuEts0gD-N4vw',
    duration: '16 треков, 1 ч. 17 мин.'
  },
  {
    id: 4,
    name: 'Metallica - Ride the Lightning',
    img: 'https://upload.wikimedia.org/wikipedia/ru/f/fc/Ride_the_Lightning.jpg',
    best: 'Ride The Lightning, For Whom The Bell Tolls, Fight Fire With Fire',
    alt: 'playlist_4',
    link: 'https://open.spotify.com/album/05DePtm7oQMdL3Uzw2Jmsc?si=oNb3CSpKTZG0K8Kw9xubIQ',
    duration: '8 треков, 47 мин. 25 сек.'
  },
  {
    id: 5,
    name: 'Spotify - Les Dieux du Stade',
    img: 'https://i.imgur.com/IqZLd3b.png',
    best: "Another one bites the dust, Somebody to Love, Crazy Train, Can't Stop",
    alt: 'playlist_5',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DXbJR1DWfHjWw?si=641f9083eb904928',
    duration: '50 треков, от 3 ч'
  },
  {
    id: 6,
    name: 'Red Hot Chilli Peppers - Stadium Arcadium',
    img: 'https://m.media-amazon.com/images/I/81lOFvmn6tL._UF1000,1000_QL80_.jpg',
    best: 'Dani California, Snow (hey oh), Hump de bump',
    alt: 'playlist_6',
    link: 'https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ?si=xh6liRHPQvCt6QIT6HFRXw',
    duration: '29 треков, 2 ч. 31 мин.'
  }
]
