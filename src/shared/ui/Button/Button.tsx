'use client';
import React, {FC} from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({onClick, children}) => {
  return (
    <button
      className={classes.btn}
      type='button'
      onClick={(event) => {
        event.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};
