import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FieldError } from 'react-hook-form';

export type PropsType = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  error: FieldError | undefined;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
};
