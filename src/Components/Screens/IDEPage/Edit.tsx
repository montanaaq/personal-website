import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Button from '@mui/material/Button/Button'
import type { FC } from 'react'
import { useRef } from 'react'
import styles from './IDEPage.module.css'

interface EditProps {
  header: string
  subHeader: string
  mainInfo: string
  addInfo?: string
  img: string
  alt: string
}

const Edit: FC<EditProps> = ({
  header,
  subHeader,
  mainInfo,
  addInfo,
  img,
  alt
}) => {
  const pRef = useRef<HTMLPreElement>(null)
  const copyToClipboard = () => {
    if (pRef.current) {
      const range = document.createRange()
      range.selectNode(pRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
      document.execCommand('copy')
      window.getSelection()?.removeAllRanges()
      alert(`${subHeader} copied!`)
    }
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '100px',
          marginTop: '50px',
          marginBottom: '50px'
        }}
      >
        <h2 dangerouslySetInnerHTML={{ __html: header }}></h2>
        <img
          src={img}
          alt={alt}
          style={{
            width: '85px'
          }}
        />
      </div>
      <div className={styles.settings}>
        <pre
          style={{
            fontSize: '1.125rem' /* 18px / 16px = 1.125rem */,
            marginBottom: '20px'
          }}
        >
          {subHeader}
        </pre>
        <pre
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
          className={styles.settings_text}
          ref={pRef}
          dangerouslySetInnerHTML={{ __html: mainInfo }}
        ></pre>
        <Button onClick={copyToClipboard} className={styles.copy_button}>
          <ContentCopyIcon fontSize="small" />
          Copy
        </Button>
        {addInfo ? <b>{addInfo}</b> : ''}
      </div>
    </>
  )
}

export default Edit
