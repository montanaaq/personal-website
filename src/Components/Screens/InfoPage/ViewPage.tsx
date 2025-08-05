import { motion as m } from 'motion/react'
import { FC } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useProjectsList } from '../../../data/Projects/ProjectsListLocalized'
import Footer from '../Homepage/Footer/Footer'
import styles from './Info.module.css'

const ViewPage: FC = () => {
  const today = new Date()
  const { t } = useLanguage()
  const ProjectsList = useProjectsList()

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today)

  return (
    <div>
      <div className={styles.main_post}>
        <header style={{ margin: '20px 0px 40px 0px' }}>
          <h1 style={{ fontSize: '2.375rem', fontWeight: 600 }}>
            {' '}
            {/* 38px / 16px = 2.375rem */}
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
            <m.div
              className={styles.container}
              key={el.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '10px' }} id={el.url}>
                {el.main_name} ({el.date})
              </h2>
              <p
                style={{
                  marginBottom: '10px',
                  color: 'var(--lower-text-color)'
                }}
              >
                {el.p}
              </p>
              <p className={styles.status}>
                {t.info.status}{' '}
                {el.isSupport ? (
                  <span className={styles.support}>{t.info.supported}</span>
                ) : (
                  <span className={styles.not_support}>
                    {t.info.notSupported}
                  </span>
                )}
              </p>
              {el.link && (
                <div style={{ marginTop: '15px' }}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={el.link}
                    style={{
                      color: 'var(--text-color)'
                    }}
                  >
                    {t.info.link}
                  </a>
                </div>
              )}
              {el.source_code ? (
                <div style={{ marginTop: '5px' }}>
                  <a
                    href={el.source_code}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--lower-text-color)'
                    }}
                  >
                    {t.info.sourceCode}
                  </a>
                </div>
              ) : (
                ''
              )}
              <m.img
                src={el.img}
                alt="not downloaded"
                className={
                  el.url === 'sneaknews'
                    ? `${styles.sneaknews_img}`
                    : el.url === 'uni_finder_website'
                      ? `${styles.uni_finder_website_img}`
                      : el.url === 'my_website'
                        ? `${styles.profile_website_img}`
                        : el.url === 'schedulebot'
                          ? `${styles.schedulebot_img}`
                          : el.url === 'desks_duels'
                            ? `${styles.desks_duels_img}`
                            : ''
                }
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </m.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewPage
