'use client';
import React from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import {Logo} from '~shared/ui/Icons/Logo';
import {Container} from '~shared/ui/Container/Container';
import {usePathname} from 'next/navigation';
import cx from 'classnames';
import {Button} from '~shared/ui/Button/Button';

export const Header = () => {
  const currentRoute = usePathname();
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.row}>
          <div className={classes.logoWrapperLink}>
            <Logo width={100} height={40} fill={'#FFF'} />
          </div>
          <nav className={classes.nav}>
            <Link
              href={'/'}
              className={cx(
                classes.link,
                (currentRoute === '/' || currentRoute.startsWith('/games')) && classes.linkActive,
              )}
            >
              О команде
            </Link>
            <Link
              href={'/stats'}
              className={cx(classes.link, currentRoute === '/stats' && classes.linkActive)}
            >
              Статистика
            </Link>
            <Link
              href={'/blog'}
              className={cx(classes.link, currentRoute === '/blog' && classes.linkActive)}
            >
              Блог
            </Link>
          </nav>
        </div>
        <Button isLink href={'/auth'}>
          Войти
        </Button>
      </Container>
    </header>
  );
};
