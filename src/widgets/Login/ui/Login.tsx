'use client';
import React, {useState} from 'react';
import {Button} from '~shared/ui/Button/Button';
import classes from './Login.module.scss';
import {Password} from '~shared/ui/Password/Password';
import {Checkbox} from '~shared/ui/Checkbox/Checkbox';
import {InputText} from '~shared/ui/InputText/InputText';
import {redirect, useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import {Box, Icon, Text} from '@chakra-ui/react';
import {SiVk} from 'react-icons/si';
import Link from 'next/link';

export const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handlerSubmit = async () => {
    const response = await signIn('credentials', {login, password, redirect: false});

    if (response && !response.error) {
      router.push('/');
    }
  };

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
        {/* <Checkbox
          value={checkboxValue}
          onChange={(e) => setCheckboxValue((prev) => !prev)}
          label={<span>Запомнить меня</span>}
        />*/}
        <Button disabled={!!error || !password || !login} className={classes.btn} onClick={onClick}>
          Войти
        </Button>
        {error && <p className={classes.errorText}>{error}</p>}
        <Text className={classes.or}>или</Text>
        <Button className={classes.btnVk} isLink href={'https://api.basediplom.ru/api/connect/vk'}>
          <Icon as={SiVk} fontSize={'lg'} />
        </Button>
        <Box>
          <Text className={classes.textBottom}>
            Нет аккаунта? <Link href={'/signup'}>Регистрация</Link>
          </Text>
        </Box>
      </div>
    </div>
  );
};
