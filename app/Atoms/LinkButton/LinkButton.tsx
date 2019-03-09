import * as React from 'react'
import * as styles from './LinkButton.m.css'

export interface LinkButtonProps {
  children: React.ReactNode;
  onClick: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

export const LinkButton: React.StatelessComponent<LinkButtonProps> =
  (props: LinkButtonProps): React.ReactElement => (
    <div className={styles.link} onClick={props.onClick}>
      {props.children}
    </div>
  )
