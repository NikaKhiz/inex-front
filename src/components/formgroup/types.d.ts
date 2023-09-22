import { ChangeEventHandler, FocusEventHandler } from 'react';

export type PropsType = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
};
