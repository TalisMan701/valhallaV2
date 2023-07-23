'use client';
import React from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import {Logo} from '~shared/ui/Icons/Logo';
import {Container} from '~shared/ui/Container/Container';
import {usePathname} from 'next/navigation';
import cx from 'classnames';

export const Header = () => {
  const currentRoute = usePathname();
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link href={'/'} className={classes.logoWrapperLink}>
          <Logo width={100} height={40} />
        </Link>
        <nav className={classes.nav}>
          <Link
            href={'/about'}
            className={cx(classes.link, currentRoute === '/about' && classes.linkActive)}
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
      </Container>
    </header>
  );
};
