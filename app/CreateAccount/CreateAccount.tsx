import * as React from 'react'
import * as styles from './CreateAccount.m.css'
import { Textbox, InputTypes } from '../Atoms/Textbox/Textbox'
import { Button, ButtonTypes } from '../Atoms/Button/Button'
import { LinkButton } from '../Atoms/LinkButton/LinkButton'

export interface CreateAccountProps {
  onLoginClicked: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

export class CreateAccount extends React.Component<CreateAccountProps> {
  public render (): React.ReactElement {
    return (
      <form className={styles.createAccount}>
        <div className={styles.label}>Create Account</div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Text} placeholder='Name' />
        </div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Password} placeholder='Password' />
        </div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Password} placeholder='Repeat Password' />
        </div>
        <div className={styles.input}>
          <Textbox type={InputTypes.Text} placeholder='Invite Code' />
        </div>
        <Button type={ButtonTypes.Submit}>Create Account</Button>
        <div className={styles.createContainer}>
          Already have an account?
          <LinkButton onClick={this.props.onLoginClicked}>
            Login
          </LinkButton>
        </div>
      </form>
    )
  }
}
