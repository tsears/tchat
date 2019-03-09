import * as React from 'react'
import * as styles from './Body.m.css'
import { Login } from '../Login/Login'
import { CreateAccount } from '../CreateAccount/CreateAccount'

interface BodyState {
  loginHidden: boolean;
  createHidden: boolean;
}

export class Body extends React.Component<{}, BodyState> {
  public constructor () {
    super({})

    this.state = {
      loginHidden: false,
      createHidden: true,
    }

    this.swapForms = this.swapForms.bind(this)
  }

  private swapForms (): void {
    this.setState({
      loginHidden: !this.state.loginHidden,
      createHidden: !this.state.createHidden,
    })
  }

  public render (): React.ReactElement {
    return (
      <div className={styles.body}>
        <div className={this.state.loginHidden ? styles.hidden : ''}>
          <Login onCreateAccountClicked={this.swapForms} />
        </div>
        <div className={this.state.createHidden ? styles.hidden : ''}>
          <CreateAccount onLoginClicked={this.swapForms} />
        </div>
      </div>
    )
  }
}
