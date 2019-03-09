import * as React from 'react'
import * as styles from './LinkButton.m.css'

export interface LinkButtonProps {
  children: React.ReactNode;
}

export const LinkButton: React.StatelessComponent<LinkButtonProps> =
  (props: LinkButtonProps): React.ReactElement => (
    <div className={styles.link}>{props.children}</div>
  )
