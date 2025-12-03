import type { FC } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import Footer from '../Homepage/Footer/Footer'
import Edit from './Edit'
import styles from './IDEPage.module.css'

const ViewPage: FC = () => {
  const { t } = useLanguage()

  return (
    <>
      <div className={styles.main_post}>
        <div className={styles.wrapper}>
          <Edit
            header={`${t.ide.settings} <span style="color: var(--secondary)">${t.ide.settingsHighlight}</span> VSCode`}
            subHeader={t.ide.settingsJson}
            mainInfo={
              '"explorer.confirmDragAndDrop": false,<br />"explorer.confirmDelete": false,<br />"security.workspace.trust.untrustedFiles": "open",<br />"javascript.updateImportsOnFileMove.enabled": "always",<br />"workbench.sideBar.location": "right",<br />"workbench.iconTheme": "catppuccin-perfect-sequoia",<br />"editor.stickyScroll.enabled": true,<br />"workbench.settings.applyToAllProfiles": ["editor.fontFamily"],<br />"files.autoSave": "afterDelay",<br />"editor.fontFamily": "JetBrainsMono Nerd Font",<br />"editor.cursorSmoothCaretAnimation": "on",<br />"editor.cursorBlinking": "expand",<br />"editor.smoothScrolling": true,<br />"editor.cursorStyle": "line-thin",<br />"editor.glyphMargin": false,<br />"git.autofetch": true,<br />"git.enableSmartCommit": true,<br />"workbench.colorTheme": "Catppuccin Mocha",<br />"workbench.editor.enablePreview": false,<br />"python.defaultInterpreterPath": "/usr/local/bin/python3",<br />"window.density.editorTabHeight": "compact",<br />"workbench.activityBar.location": "top",<br />"explorer.compactFolders": false,<br />"terminal.integrated.tabs.enableAnimation": false,<br />"terminal.integrated.drawBoldTextInBrightColors": true,<br />"terminal.integrated.gpuAcceleration": "off",<br />"git.terminalAuthentication": false,<br />"terminal.integrated.env.windows": {},<br />"terminal.integrated.cursorStyle": "line",<br />"editor.scrollbar.vertical": "hidden",<br />"editor.scrollbar.horizontal": "hidden",<br />"window.titleBarStyle": "custom",<br />"workbench.layoutControl.enabled": false,<br />"livePreview.notifyOnOpenLooseFile": false,<br />"redhat.telemetry.enabled": true,<br />"git.openRepositoryInParentFolders": "never",<br />"hediet.vscode-drawio.resizeImages": null,<br />"vsicons.dontShowNewVersionMessage": true, <br />"prettier.configPath": "",<br />"window.zoomLevel": 1,<br />"editor.minimap.enabled": false,<br />"editor.formatOnSave": true,<br />"window.commandCenter": false,<br />"cmake.options.statusBarVisibility": "compact",<br />"workbench.startupEditor": "none",<br />"batch-runner.cmdPath": "/Applications/iTerm.app"'
            }
            img={'/vs_code_icon.png'}
            alt={'vscode_ico'}
          />
          <Edit
            header={`${t.ide.extensions} <span style="color: var(--secondary)">${t.ide.extensionsHighlight}</span> VSCode`}
            subHeader={t.ide.extensionsList}
            mainInfo={`Из расширений, которые я использую могу порекомендовать 3 из них:<br /> <br /> 1. <u>${t.ide.codeium}</u> - ${t.ide.codeiumDesc} <br /><a href="https://codeium.com">Ссылка</a> <br />Extension ID - Codeium.codeium <br /><img class=${styles.codeium_img} src="https://i.imgur.com/9Okepby.png" alt="codeium_img"/> <br /><br /> 2. <u>${t.ide.backticks}</u> - ${t.ide.backticksDesc} <br />Extension ID - fractalbrew.backticks <img class=${styles.backticks_img} src="https://i.imgur.com/JekVb0c.png" alt="backticks_img" /><br /><br /> 3. <u>${t.ide.errorLens}</u> - ${t.ide.errorLensDesc}<br />Extension ID - usernamehw.errorlens.<img src="https://i.imgur.com/mxvn9Ha.png" alt="errorlens_img" class=${styles.errorlens_img} /> <br /><br />${t.ide.themes} <br /> <ul><li>${t.ide.themesList}</li></ul>`}
            img={
              'https://www-assets.kolide.com/assets/inventory/device_properties/icons/vs-code-extensions-0037129b.png'
            }
            alt={'extensions_ico'}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewPage
