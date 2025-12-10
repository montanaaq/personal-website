import { useLanguage } from '@/hooks/useLanguage'

interface IProjectsList {
  id: number
  name: string
  p: string
  url: string
  img?: string
  video?: string
  main_name: string
  date: string
  isSupport: boolean
  link?: string
  source_code?: string
  imageClassName?: string
}

export const useProjectsList = (): IProjectsList[] => {
  const { t } = useLanguage()

  return [
    {
      id: 1,
      name: t.projects.scheduleBot.name,
      p: t.projects.scheduleBot.description,
      url: 'schedulebot',
      img: 'assets/img/schedule_bot.webp',
      main_name: 'Schedule Bot',
      date: t.projects.scheduleBot.date,
      isSupport: true,
      link: 'http://t.me/gymn33_bot',
      source_code: 'https://github.com/montanaaq/newScheduleBot',
      imageClassName: 'schedulebot_img'
    },
    {
      id: 2,
      name: t.projects.sneakNewsBot.name,
      p: t.projects.sneakNewsBot.description,
      url: 'sneaknews',
      img: 'assets/img/sneak_news_bot.webp',
      main_name: 'SneakNews Bot',
      date: t.projects.sneakNewsBot.date,
      isSupport: true,
      link: 'http://t.me/sneaknews_bot',
      imageClassName: 'sneaknews_img'
    },
    {
      id: 3,
      name: t.projects.uniFinderBot.name,
      p: t.projects.uniFinderBot.description,
      url: 'assets/img/uni_finder_bot.webp',
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
      img: 'assets/img/uni_finder_site.webp',
      main_name: 'UniFinder Site',
      date: t.projects.uniFinderWebsite.date,
      isSupport: false,
      link: 'https://uni-finder-mntq.netlify.app',
      source_code: 'https://github.com/montanaaq/uni-finder-website',
      imageClassName: 'uni_finder_website_img'
    },
    {
      id: 5,
      name: t.projects.personalWebsite.name,
      p: t.projects.personalWebsite.description,
      url: 'my_website',
      img: 'assets/img/personal_site.webp',
      main_name: 'My Personal Site',
      date: t.projects.personalWebsite.date,
      link: 'https://montaanaq.netlify.app',
      isSupport: true,
      source_code: 'https://github.com/montanaaq/personal-website',
      imageClassName: 'profile_website_img'
    },
    {
      id: 6,
      name: t.projects.desksDuels.name,
      p: t.projects.desksDuels.description,
      url: 'desks_duels',
      img: 'assets/img/desk_duels.webp',
      main_name: 'Desks Duels',
      date: t.projects.desksDuels.date,
      isSupport: false,
      link: 'https://t.me/desksduels_bot',
      source_code: 'https://github.com/montanaaq/desks_duels',
      imageClassName: 'desks_duels_img'
    },
    {
      id: 7,
      name: t.projects.alfaEcosystem.name,
      p: t.projects.alfaEcosystem.description,
      url: 'alfa_ecosystem',
      img: 'assets/img/alfa_ecosystem.webp',
      main_name: 'News SPA Webapp',
      date: t.projects.alfaEcosystem.date,
      isSupport: false,
      source_code: 'https://github.com/montanaaq/alfa-ecosystem-task',
      imageClassName: 'alfa_ecosystem_img'
    }
  ]
}
