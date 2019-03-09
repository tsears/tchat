import * as React from 'react'
import * as styles from './Textbox.m.css'

export interface TextboxProps {
  type: string;
  placeholder?: string;
}

export enum InputTypes {
  Text = 'text',
  Password = 'password'
}

export const Textbox: React.StatelessComponent<TextboxProps> =
  (props: TextboxProps): React.ReactElement => (
    <input type='text'
      className={styles.inputBox}
      placeholder={props.placeholder}
    />
  )
