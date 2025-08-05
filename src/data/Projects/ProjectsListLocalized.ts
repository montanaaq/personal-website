import { useLanguage } from '../../contexts/LanguageContext'

interface IProjectsList {
  id: number
  name: string
  p: string
  url: string
  img: string
  main_name: string
  date: string
  isSupport: boolean
  link: string
  source_code?: string
}

export const useProjectsList = (): IProjectsList[] => {
  const { t } = useLanguage()

  return [
    {
      id: 1,
      name: t.projects.scheduleBot.name,
      p: t.projects.scheduleBot.description,
      url: 'schedulebot',
      img: 'https://i.imgur.com/KCPMtNQ.png',
      main_name: 'Schedule Bot',
      date: t.projects.scheduleBot.date,
      isSupport: true,
      link: 'http://t.me/gymn33_bot',
      source_code: 'https://github.com/montanaaq/newScheduleBot'
    },
    {
      id: 2,
      name: t.projects.sneakNewsBot.name,
      p: t.projects.sneakNewsBot.description,
      url: 'sneaknews',
      img: 'https://i.imgur.com/9OHFTw6.png',
      main_name: 'SneakNews Bot',
      date: t.projects.sneakNewsBot.date,
      isSupport: true,
      link: 'http://t.me/sneaknews_bot'
    },
    {
      id: 3,
      name: t.projects.uniFinderBot.name,
      p: t.projects.uniFinderBot.description,
      url: 'unifinder',
      img: 'https://i.imgur.com/afWkow6.png',
      main_name: 'UniFinder Bot',
      date: t.projects.uniFinderBot.date,
      isSupport: false,
      link: 'http://t.me/uni_finder_bot'
    },
    {
      id: 4,
      name: t.projects.uniFinderWebsite.name,
      p: t.projects.uniFinderWebsite.description,
      url: 'uni_finder_website',
      img: 'https://i.imgur.com/gDLtFUa.png',
      main_name: 'UniFinder Site',
      date: t.projects.uniFinderWebsite.date,
      isSupport: false,
      link: 'https://uni-finder-mntq.netlify.app',
      source_code: 'https://github.com/montanaaq/uni-finder-website'
    },
    {
      id: 5,
      name: t.projects.personalWebsite.name,
      p: t.projects.personalWebsite.description,
      url: 'my_website',
      img: 'https://i.imgur.com/8xLheCI.png',
      main_name: 'My Personal Site',
      date: t.projects.personalWebsite.date,
      link: 'https://montaanaq.netlify.app',
      isSupport: true,
      source_code: 'https://github.com/montanaaq/personal-website'
    },
    {
      id: 6,
      name: t.projects.desksDuels.name,
      p: t.projects.desksDuels.description,
      url: 'desks_duels',
      img: 'https://i.imgur.com/aXASI67.jpeg',
      main_name: 'Desks Duels',
      date: t.projects.desksDuels.date,
      isSupport: false,
      link: 'https://t.me/desksduels_bot',
      source_code: 'https://github.com/montanaaq/desks_duels'
    }
  ]
}
