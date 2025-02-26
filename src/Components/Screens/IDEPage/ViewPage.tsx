import { motion, useScroll, useSpring } from 'framer-motion'
import { FC } from 'react'
import Header from '../Homepage/Header/Header'
import Edit from './Edit'
import styles from './IDEPage.module.css'
import Footer from '../Homepage/Footer/Footer'

const ViewPage: FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className={styles.main_post}>
        <div className={styles.wrapper}>
          <Edit
            header={'Мои <a>настройки</a> VSCode'}
            subHeader={'settings.json'}
            mainInfo={
              '"explorer.confirmDragAndDrop": false,<br />"explorer.confirmDelete": false,<br />"security.workspace.trust.untrustedFiles": "open",<br />"javascript.updateImportsOnFileMove.enabled": "always",<br />"workbench.sideBar.location": "right",<br />"workbench.iconTheme": "catppuccin-perfect-sequoia",<br />"editor.stickyScroll.enabled": true,<br />"workbench.settings.applyToAllProfiles": ["editor.fontFamily"],<br />"files.autoSave": "afterDelay",<br />"editor.fontFamily": "JetBrainsMono Nerd Font",<br />"editor.cursorSmoothCaretAnimation": "on",<br />"editor.cursorBlinking": "expand",<br />"editor.smoothScrolling": true,<br />"editor.cursorStyle": "line-thin",<br />"editor.glyphMargin": false,<br />"git.autofetch": true,<br />"git.enableSmartCommit": true,<br />"workbench.colorTheme": "Catppuccin Mocha",<br />"workbench.editor.enablePreview": false,<br />"python.defaultInterpreterPath": "/usr/local/bin/python3",<br />"window.density.editorTabHeight": "compact",<br />"workbench.activityBar.location": "top",<br />"explorer.compactFolders": false,<br />"terminal.integrated.tabs.enableAnimation": false,<br />"terminal.integrated.drawBoldTextInBrightColors": true,<br />"terminal.integrated.gpuAcceleration": "off",<br />"git.terminalAuthentication": false,<br />"terminal.integrated.env.windows": {},<br />"terminal.integrated.cursorStyle": "line",<br />"editor.scrollbar.vertical": "hidden",<br />"editor.scrollbar.horizontal": "hidden",<br />"window.titleBarStyle": "custom",<br />"workbench.layoutControl.enabled": false,<br />"livePreview.notifyOnOpenLooseFile": false,<br />"redhat.telemetry.enabled": true,<br />"git.openRepositoryInParentFolders": "never",<br />"hediet.vscode-drawio.resizeImages": null,<br />"vsicons.dontShowNewVersionMessage": true, <br />"prettier.configPath": "",<br />"window.zoomLevel": 1,<br />"editor.minimap.enabled": false,<br />"editor.formatOnSave": true,<br />"window.commandCenter": false,<br />"cmake.options.statusBarVisibility": "compact",<br />"workbench.startupEditor": "none",<br />"batch-runner.cmdPath": "/Applications/iTerm.app"'
            }
            img={'https://code.visualstudio.com/assets/images/code-stable.png'}
            alt={'vscode_ico'}
          />
          <Edit
            header={'Мои <a>расширения</a> VSCode'}
            subHeader={'extensions'}
            mainInfo={`Из расширений, которые я использую могу порекомендовать 3 из них:<br /> <br /> 1. <u>Codeium</u> - это ИИ, который помогает вам писать код на этапе разработке и также есть отдельный чат с ним <br /><a href="https://codeium.com">Ссылка</a> <br />Extension ID - Codeium.codeium <br /><img class=${styles.codeium_img} src="https://i.imgur.com/9Okepby.png" alt="codeium_img"/> <br /><br /> 2. <u>Backticks</u> - это ещё одно из моих любимых расширений, так как он автоматически ставит за вас обратные кавычки при f строках в JS, также считаю очень полезным и всегда использую <br />Extension ID - fractalbrew.backticks <img class=${styles.backticks_img} src="https://i.imgur.com/JekVb0c.png" alt="backticks_img" /><br /><br /> 3. <u>Error Lens</u> - расширение, которое показывает ваши ошибки прямо в строке VSCode, очень полезно, так как видно где какая ошибка была допущена<br />Extension ID - usernamehw.errorlens.<img src="https://i.imgur.com/mxvn9Ha.png" alt="errorlens_img" class=${styles.errorlens_img} /> <br /><br />Конечно же у меня есть очень много тем, которые также являются расширениями. Вот небольшой список моих любимых: <br /> <ul><li>Catpuccin Themes</li><li>Andromeda</li><li>Eva Theme</li><li>Horizon Theme</li><li>Material Theme</li></ul>`}
            img={
              'https://www-assets.kolide.com/assets/inventory/device_properties/icons/vs-code-extensions-0037129b.png'
            }
            alt={'extensions_ico'}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ViewPage
