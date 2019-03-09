import * as React from 'react'
import * as styles from './Body.m.css'
import { Login } from '../Login/Login'
import { CreateAccount } from '../CreateAccount/CreateAccount'

const TRANSITION_DELAY = 300

interface BodyState {
  visibilityStates: {
    [key: string]: string;
  };
}

const VisibilityStates = {
  Visible: styles.visible,
  SlidingOut: styles.slideOut,
  SlidingIn: styles.slideIn,
  Waiting: styles.waiting,
  Hidden: styles.hidden,
  Hidden2: styles.hidden2,
}

function nextState (initialState: BodyState): BodyState {
  const newState: BodyState = {
    visibilityStates: {
      login: VisibilityStates.Visible,
      create: VisibilityStates.Hidden,
    },
  }

  for (let key in initialState.visibilityStates) {
    const s = initialState.visibilityStates[key]

    if (s === VisibilityStates.Visible) {
      newState.visibilityStates[key] = VisibilityStates.SlidingOut
    } else if (s === VisibilityStates.SlidingOut) {
      newState.visibilityStates[key] = VisibilityStates.Hidden
    } else if (s === VisibilityStates.Hidden) {
      newState.visibilityStates[key] = VisibilityStates.Hidden2
    } else if (s === VisibilityStates.Hidden2) {
      newState.visibilityStates[key] = VisibilityStates.Waiting
    } else if (s === VisibilityStates.Waiting) {
      newState.visibilityStates[key] = VisibilityStates.SlidingIn
    } else if (s === VisibilityStates.SlidingIn) {
      newState.visibilityStates[key] = VisibilityStates.Visible
    }
  }

  return newState
}

function hasElementInState (state: BodyState, target: string): boolean {
  return Object.keys(state.visibilityStates)
    .map(k => state.visibilityStates[k])
    .includes(target)
}

export class Body extends React.Component<{}, BodyState> {
  public constructor () {
    super({})

    this.state = {
      visibilityStates: {
        login: VisibilityStates.Visible,
        create: VisibilityStates.Hidden2,
      },
    }

    this.swapForms = this.swapForms.bind(this)
  }

  private swapForms (): void {
    this.setState(state => nextState(state))
  }

  public componentDidUpdate (): void {
    setTimeout(() => {
      if (!hasElementInState(this.state, VisibilityStates.Visible)) {
        this.swapForms()
      }
    }, TRANSITION_DELAY)
  }

  public render (): React.ReactElement {
    return (
      <div className={styles.body}>
        <div className={`${this.state.visibilityStates['login']} ${styles.form}`}>
          <Login onCreateAccountClicked={this.swapForms} />
        </div>
        <div className={`${this.state.visibilityStates['create']} ${styles.form}`}>
          <CreateAccount onLoginClicked={this.swapForms} />
        </div>
      </div>
    )
  }
}
