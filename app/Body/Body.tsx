import * as React from 'react'
import * as styles from './Body.m.css'

export class Body extends React.Component<{}> {
  public render (): React.ReactElement {
    return (
      <div className={styles.body} />
    )
  }
}
