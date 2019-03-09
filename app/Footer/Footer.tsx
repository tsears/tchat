import * as React from 'react'
import * as styles from './Footer.m.css'

const currentYear = new Date().getFullYear()

export const Footer: React.StatelessComponent<{}> = (): React.ReactElement => (
  <div className={styles.footer}>
    <div>&copy;{currentYear} Tom Sears</div>
  </div>
)
