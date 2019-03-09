import * as React from 'react'
import * as styles from './Login.m.css'
import { Textbox, InputTypes } from '../Atoms/Textbox/Textbox'
import { Button, ButtonTypes } from '../Atoms/Button/Button'
import { LinkButton } from '../Atoms/LinkButton/LinkButton'

export interface LoginProps {
  onCreateAccountClicked: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

export class Login extends React.Component<LoginProps> {
  public render (): React.ReactElement {
    return (
      <form className={styles.login}>
        <div className={styles.label}>Login</div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Text} placeholder='Name' />
        </div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Password} placeholder='Password' />
        </div>
        <Button type={ButtonTypes.Submit}>Go</Button>
        <div className={styles.createContainer}>
          <LinkButton onClick={this.props.onCreateAccountClicked}>
            Create account
          </LinkButton>
        </div>
      </form>
    )
  }
}
