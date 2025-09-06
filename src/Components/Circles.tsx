import styles from './Circles.module.css'
import { FC, ReactElement, ReactNode } from 'react'

const Circles: FC<{ children: ReactElement<ReactNode> }> = ({ children }) => {
  return (
    <>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {children}
    </>
  )
}

export default Circles
