import * as React from 'react'
import * as styles from './Button.m.css'

export interface ButtonProps {
  type: ButtonTypes;
  style?: ButtonStyles;
  children: React.ReactNode;
}

export enum ButtonTypes {
  InputButton,
  Button,
  Submit,
}

export enum ButtonStyles {
  Active,
}

const buttonStyles = {
  [ButtonStyles.Active]: styles.activeButton,
}

export const Button: React.StatelessComponent<ButtonProps> =
  (props: ButtonProps): React.ReactElement => {
    switch (props.type) {
      case ButtonTypes.Submit:
        return (
          <input type='submit' value={props.children.toString()} className={buttonStyles[props.style]} />
        )
      case ButtonTypes.Button:
        return (
          <button className={buttonStyles[props.style]}>
            {props.children}
          </button>
        )
    }
  }

Button.defaultProps = {
  style: ButtonStyles.Active,
}
