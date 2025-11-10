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

  // Music Page
  music: {
    title: string
    titleHighlight: string
    albums: string
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

  // IDE Page
  ide: {
    settings: string
    settingsHighlight: string
    extensions: string
    extensionsHighlight: string
    settingsJson: string
    extensionsList: string
    codeium: string
    codeiumDesc: string
    backticks: string
    backticksDesc: string
    errorLens: string
    errorLensDesc: string
    themes: string
    themesList: string
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
  }

  // Music Albums
  musicAlbums: {
    nirvana: {
      name: string
      best: string
      duration: string
    }
    blackSabbath: {
      name: string
      best: string
      duration: string
    }
    primus: {
      name: string
      best: string
      duration: string
    }
    metallica: {
      name: string
      best: string
      duration: string
    }
    spotify: {
      name: string
      best: string
      duration: string
    }
    redHotChiliPeppers: {
      name: string
      best: string
      duration: string
    }
  }

  // Music Authors
  musicAuthors: {
    redHotChiliPeppers: {
      name: string
      info: string
    }
    nirvana: {
      name: string
      info: string
    }
    blackSabbath: {
      name: string
      info: string
    }
    queen: {
      name: string
      info: string
    }
    primus: {
      name: string
      info: string
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
    music: {
      title: 'Моя',
      titleHighlight: 'музыка',
      albums: 'Альбомы'
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
    ide: {
      settings: 'Мои ',
      settingsHighlight: 'настройки',
      extensions: 'Мои ',
      extensionsHighlight: 'расширения',
      settingsJson: 'settings.json',
      extensionsList: 'extensions',
      codeium: 'Codeium',
      codeiumDesc:
        'это ИИ, который помогает вам писать код на этапе разработке и также есть отдельный чат с ним',
      backticks: 'Backticks',
      backticksDesc:
        'это ещё одно из моих любимых расширений, так как он автоматически ставит за вас обратные кавычки при f строках в JS, также считаю очень полезным и всегда использую',
      errorLens: 'Error Lens',
      errorLensDesc:
        'расширение, которое показывает ваши ошибки прямо в строке VSCode, очень полезно, так как видно где какая ошибка была допущена',
      themes:
        'Конечно же у меня есть очень много тем, которые также являются расширениями. Вот небольшой список моих любимых:',
      themesList: 'Themes, Andromeda, Eva Theme, Horizon Theme, Material Theme'
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
      }
    },
    musicAlbums: {
      nirvana: {
        name: 'Nirvana - Bleach',
        best: 'Bleach, Floyd the Barber, Love Buzz',
        duration: '13 треков, 42 мин. 45 сек.'
      },
      blackSabbath: {
        name: 'Black Sabbath - Paranoid',
        best: 'Paranoid, Iron Man, War Pigs',
        duration: '8 треков, 41 мин. 46 сек.'
      },
      primus: {
        name: "Primus - They Can't All Be Zingers",
        best: 'My Name Is Mud, Tommy The Cat, Jerry Was A Race Car Driver',
        duration: '16 треков, 1 ч. 17 мин.'
      },
      metallica: {
        name: 'Metallica - Ride the Lightning',
        best: 'Ride The Lightning, For Whom The Bell Tolls, Fight Fire With Fire',
        duration: '8 треков, 47 мин. 25 сек.'
      },
      spotify: {
        name: 'Spotify - Les Dieux du Stade',
        best: "Another one bites the dust, Somebody to Love, Crazy Train, Can't Stop",
        duration: '50 треков, от 3 ч'
      },
      redHotChiliPeppers: {
        name: 'Red Hot Chilli Peppers - Stadium Arcadium',
        best: 'Dani California, Snow (hey oh), Hump de bump',
        duration: '29 треков, 2 ч. 31 мин.'
      }
    },
    musicAuthors: {
      redHotChiliPeppers: {
        name: '1. Red Hot Chilli Peppers',
        info: 'Американская рок-группа, образованная в 1983 году в Калифорнии вокалистом Энтони Кидисом, басистом Майклом Бэлзари (известным как Фли). Играют в жанре: рок, фанк'
      },
      nirvana: {
        name: '2. Nirvana',
        info: 'Американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем, также барабанщиком Дэйвом Гроллом. Играют в жанре: гранж, рок'
      },
      blackSabbath: {
        name: '3. Black Sabbath',
        info: 'Британская рок-группа, образованная в Бирмингеме, Англия, в 1968 году и оказавшая значительное влияние на развитие рок-музыки, прежде всего, хеви-метала. Играют в жанре: хэви метал, классический метал'
      },
      queen: {
        name: '4. Queen',
        info: 'Британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки. Играют в жанре: рок, оперный-рок'
      },
      primus: {
        name: '5. Primus',
        info: 'Американская альтернативная метал-группа, трио, основанное в середине 1980-х годов. Бессменный лидер группы — фронтмен, вокалист и бас-гитарист Лес Клейпул. Играют в жанре: ню метал, преобладает бас гитара'
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
    music: {
      title: 'My ',
      titleHighlight: 'music',
      albums: 'Albums'
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
    ide: {
      settings: 'My',
      settingsHighlight: 'settings',
      extensions: 'My',
      extensionsHighlight: 'extensions',
      settingsJson: 'settings.json',
      extensionsList: 'extensions',
      codeium: 'Codeium',
      codeiumDesc:
        'is an AI that helps you write code during development and also has a separate chat with it',
      backticks: 'Backticks',
      backticksDesc:
        'is another one of my favorite extensions, as it automatically puts backticks for you in JS f-strings, I also consider it very useful and always use it',
      errorLens: 'Error Lens',
      errorLensDesc:
        'an extension that shows your errors directly in the VSCode line, very useful as you can see where what error was made',
      themes:
        "Of course, I have many themes that are also extensions. Here's a small list of my favorites:",
      themesList:
        'Catpuccin Themes, Andromeda, Eva Theme, Horizon Theme, Material Theme'
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
      }
    },
    musicAlbums: {
      nirvana: {
        name: 'Nirvana - Bleach',
        best: 'Bleach, Floyd the Barber, Love Buzz',
        duration: '13 tracks, 42 min. 45 sec.'
      },
      blackSabbath: {
        name: 'Black Sabbath - Paranoid',
        best: 'Paranoid, Iron Man, War Pigs',
        duration: '8 tracks, 41 min. 46 sec.'
      },
      primus: {
        name: "Primus - They Can't All Be Zingers",
        best: 'My Name Is Mud, Tommy The Cat, Jerry Was A Race Car Driver',
        duration: '16 tracks, 1 hr. 17 min.'
      },
      metallica: {
        name: 'Metallica - Ride the Lightning',
        best: 'Ride The Lightning, For Whom The Bell Tolls, Fight Fire With Fire',
        duration: '8 tracks, 47 min. 25 sec.'
      },
      spotify: {
        name: 'Spotify - Les Dieux du Stade',
        best: "Another one bites the dust, Somebody to Love, Crazy Train, Can't Stop",
        duration: '50 tracks, from 3 hrs'
      },
      redHotChiliPeppers: {
        name: 'Red Hot Chili Peppers - Stadium Arcadium',
        best: 'Dani California, Snow (hey oh), Hump de bump',
        duration: '29 tracks, 2 hrs. 31 min.'
      }
    },
    musicAuthors: {
      redHotChiliPeppers: {
        name: '1. Red Hot Chili Peppers',
        info: 'American rock band formed in 1983 in California by vocalist Anthony Kiedis and bassist Michael Balzary (known as Flea). They play in the genres: rock, funk'
      },
      nirvana: {
        name: '2. Nirvana',
        info: 'American rock band created by vocalist and guitarist Kurt Cobain and bassist Krist Novoselic, also drummer Dave Grohl. They play in the genres: grunge, rock'
      },
      blackSabbath: {
        name: '3. Black Sabbath',
        info: 'British rock band formed in Birmingham, England in 1968 and had a significant influence on the development of rock music, primarily heavy metal. They play in the genres: heavy metal, classic metal'
      },
      queen: {
        name: '4. Queen',
        info: 'British rock band that achieved widespread fame in the mid-1970s and is one of the most successful bands in rock music history. They play in the genres: rock, operatic rock'
      },
      primus: {
        name: '5. Primus',
        info: 'American alternative metal band, a trio founded in the mid-1980s. The permanent leader of the band is frontman, vocalist and bass guitarist Les Claypool. They play in the genres: nu metal, bass guitar predominates'
      }
    }
  }
}
