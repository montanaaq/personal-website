export interface Translations {
  // Header
  header: {
    name: string
  }

  // Homepage
  homepage: {
    welcome: string
    projects: string
    projectsWord: string
    links: string
    linksWords: string[]
  }

  // Footer
  footer: {
    text: string
  }

  // Info Page
  info: {
    title: string
    titleHighlight: string
    content: string
    status: string
    supported: string
    notSupported: string
    link: string
    sourceCode: string
  }

  // 404 Page
  notFound: {
    errorCode: string
    title: string
    description: string
    homeButton: string
  }

  // Buttons
  buttons: {
    projects: string
    music: string
    ide: string
  }

  // Theme toggle
  theme: {
    lightActivated: string
    darkActivated: string
  }

  // Projects
  projects: {
    scheduleBot: {
      name: string
      description: string
      date: string
    }
    sneakNewsBot: {
      name: string
      description: string
      date: string
    }
    uniFinderBot: {
      name: string
      description: string
      date: string
    }
    uniFinderWebsite: {
      name: string
      description: string
      date: string
    }
    personalWebsite: {
      name: string
      description: string
      date: string
    }
    desksDuels: {
      name: string
      description: string
      date: string
    }
    alfaEcosystem: {
      name: string
      description: string
      date: string
    }
  }
}

export const translations: Record<string, Translations> = {
  ru: {
    header: {
      name: 'Montana'
    },
    homepage: {
      welcome: 'Привет! Я Монтана (Амир Нурисламов), Фронтенд Разработчик',
      projects: 'Список проектов находится тут',
      projectsWord: 'тут',
      links: 'Связаться со мной Телеграм или Почта',
      linksWords: ['Телеграм', 'Почта']
    },
    footer: {
      text: '© 2025 Montana. Все права защищены.'
    },
    info: {
      title: 'Мои',
      titleHighlight: 'проекты',
      content: 'Содержание',
      status: 'Статус:',
      supported: 'Поддерживается',
      notSupported: 'Не поддерживается',
      link: 'Ссылка',
      sourceCode: 'Source code'
    },
    notFound: {
      errorCode: '404',
      title: 'Страница не найдена',
      description:
        'Страница, которую вы ищете, не существует или была перемещена.',
      homeButton: 'Вернуться на главную'
    },
    buttons: {
      projects: 'Проекты',
      music: 'Музыка',
      ide: 'IDE'
    },
    theme: {
      lightActivated: 'Светлая тема активирована!',
      darkActivated: 'Темная тема активирована!'
    },
    projects: {
      scheduleBot: {
        name: 'Бот расписаний занятий',
        description:
          'Бот, который позволяет вам просматривать расписание занятий в вашей школе',
        date: 'сентябрь 2023'
      },
      sneakNewsBot: {
        name: 'Бот онлайн магазина Poizon',
        description:
          'Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ',
        date: 'октябрь 2023'
      },
      uniFinderBot: {
        name: 'Бот по подбору университета в вашем городе',
        description:
          'Бот, который подбирает вам наилучший вариант в вашем городе, судя по вашим баллам (работает с помощью ChatGPT)',
        date: 'ноябрь 2023'
      },
      uniFinderWebsite: {
        name: 'Сайт по подбору университетов',
        description:
          'Сайт, с помощью которого вы сможете найти подходящий вам по баллам и местоположению университет. Написан на React',
        date: 'декабрь 2023'
      },
      personalWebsite: {
        name: 'Мой собственный сайт',
        description:
          'Сайт с полной информацией о моих крупных проектах, которые я обновляю и по сей день.',
        date: 'ноябрь 2023'
      },
      desksDuels: {
        name: 'Игра битвы за место в классе',
        description:
          'Бот и сайт в телеграм, с помощью которого можно сразиться за право на место в вашем школьном классе!',
        date: 'декабрь 2024'
      },
      alfaEcosystem: {
        name: 'Сайт с новостями',
        description:
          'Веб-приложение для удобного просмотра новостей из различных источников в одном месте, с фильтрацией и поиском по категориям.',
        date: 'январь 2024'
      }
    }
  },
  en: {
    header: {
      name: 'Montana'
    },
    homepage: {
      welcome: "Hi! I'm Montana (Amir Nurislamov), Frontend Developer",
      projects: 'Here is some of my projects',
      projectsWord: 'projects',
      links: 'Contact me by Telegram or Email',
      linksWords: ['Telegram', 'Email']
    },
    footer: {
      text: '© 2025 Montana. All rights reserved.'
    },
    info: {
      title: 'My',
      titleHighlight: 'projects',
      content: 'Content',
      status: 'Status:',
      supported: 'Supported',
      notSupported: 'Not Supported',
      link: 'Link',
      sourceCode: 'Source code'
    },
    notFound: {
      errorCode: '404',
      title: 'Page Not Found',
      description:
        "The page you're looking for doesn't exist or has been moved.",
      homeButton: 'Go Back Home'
    },
    buttons: {
      projects: 'Projects',
      music: 'Music',
      ide: 'IDE'
    },
    theme: {
      lightActivated: 'Light theme activated!',
      darkActivated: 'Dark theme activated!'
    },
    projects: {
      scheduleBot: {
        name: 'Schedule Bot',
        description:
          'A bot that allows you to view class schedules at your school',
        date: 'September 2023'
      },
      sneakNewsBot: {
        name: 'Poizon Online Store Bot',
        description:
          'A bot that helps you calculate the cost of goods from Poizon and place an order',
        date: 'October 2023'
      },
      uniFinderBot: {
        name: 'University Selection Bot for Your City',
        description:
          'A bot that selects the best option in your city based on your scores (works with ChatGPT)',
        date: 'November 2023'
      },
      uniFinderWebsite: {
        name: 'University Selection Website',
        description:
          'A website that helps you find a university suitable for your scores and location. Built with React',
        date: 'December 2023'
      },
      personalWebsite: {
        name: 'My Personal Website',
        description:
          'A website with complete information about my major projects that I continue to update to this day.',
        date: 'November 2023'
      },
      desksDuels: {
        name: 'Classroom Seat Battle Game',
        description:
          'A Telegram bot and website where you can battle for the right to a seat in your school class!',
        date: 'December 2024'
      },
      alfaEcosystem: {
        name: 'News Website',
        description:
          'A web application for convenient viewing of news from various sources in one place, with filtering and searching by categories.',
        date: 'January 2024'
      }
    }
  }
}
