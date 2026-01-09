import type { FC } from 'react'
import Footer from '../../components/footer/Footer'
import ProjectCard from '../../components/project-card/ProjectCard'
import Circles from '../../components/ui/backgrounds/Circles/Circles'
import { useProjectsList } from '../../data/Projects/ProjectsListLocalized'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Info.module.css'

const Info: FC = () => {
  const today = new Date()
  const { t, language } = useLanguage()
  const ProjectsList = useProjectsList()

  const languageMap: Record<string, string> = {
    en: 'en-US',
    ru: 'ru-RU'
  }

  const formattedDate = new Intl.DateTimeFormat(languageMap[language], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today)

  return (
    <Circles>
      <div>
        <div className={styles.main_post}>
          <header style={{ margin: '20px 0px 40px 0px' }}>
            <h1 style={{ fontSize: '2.375rem', fontWeight: 600 }}>
              {t.info.title}{' '}
              <span style={{ color: 'var(--secondary)' }}>
                {t.info.titleHighlight}
              </span>
            </h1>
            <div>
              <span>{formattedDate}</span>
            </div>
          </header>
          <div className={styles.post_content}>
            <h2 style={{ textAlign: 'left', marginBottom: '15px' }}>
              {t.info.content}
            </h2>
            <ul
              style={{
                textAlign: 'left',
                marginLeft: '20px',
                marginBottom: '35px'
              }}
            >
              {ProjectsList.map(el => (
                <li style={{ marginBottom: '15px' }} key={el.id}>
                  <a
                    href={`#${el.url}`}
                    style={{
                      color: 'var(--lower-text-color)',
                      textDecorationThickness: '1px'
                    }}
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
            {ProjectsList.map(el => (
              <ProjectCard key={el.id} project={el} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Circles>
  )
}

export default Info
