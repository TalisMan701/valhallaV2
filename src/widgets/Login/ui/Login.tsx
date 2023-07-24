'use client';
import React, {useState} from 'react';
import {Button} from '~shared/ui/Button/Button';
import classes from './Login.module.scss';
import {Password} from '~shared/ui/Password/Password';
import {Checkbox} from '~shared/ui/Checkbox/Checkbox';
import {InputText} from '~shared/ui/InputText/InputText';

export const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('');
  };

  const handlerLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    setError('');
  };

  const onClick = () => {
    if (password !== 'HELLO') {
      setError('Неверный пароль, ты точно у нас работаешь?');
    } else {
      console.log('GOOD');
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h2 className={classes.title}>Авторизация</h2>
        <InputText
          value={login}
          onChange={handlerLoginChange}
          isInvalid={!!error}
          placeholder={'Введите login'}
          className={classes.input}
        />
        <Password
          value={password}
          onChange={handlerPasswordChange}
          isInvalid={!!error}
          placeholder={'Введите пароль'}
          className={classes.input}
        />
        <Checkbox
          value={checkboxValue}
          onChange={(e) => setCheckboxValue((prev) => !prev)}
          label={<span>Запомнить меня</span>}
        />
        <Button disabled={!!error || !password || !login} className={classes.btn} onClick={onClick}>
          Войти
        </Button>
        {error && <p className={classes.errorText}>{error}</p>}
      </div>
    </div>
  );
};
