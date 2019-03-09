import * as React from 'react'
import * as styles from './Body.m.css'
import { Login } from '../Login/Login'

export class Body extends React.Component<{}> {
  public render (): React.ReactElement {
    return (
      <div className={styles.body}>
        <Login />
      </div>
    )
  }
}
