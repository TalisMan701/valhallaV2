'use client';
import React, {useState} from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import {Logo} from '~shared/ui/Icons/Logo';
import {Container} from '~shared/ui/Container/Container';
import {usePathname} from 'next/navigation';
import cx from 'classnames';
import {Button} from '~shared/ui/Button/Button';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';

export const Header = () => {
  const currentRoute = usePathname();
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const {isTablet, isDesktop, isPhone} = useWindowWidth();

  const changeShowMenuMobile = () => {
    if (!isDesktop) {
      setShowMenuMobile((prev) => !prev);
    } else {
      setShowMenuMobile(false);
    }
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.row}>
          <div className={classes.logoWrapperLink}>
            <Logo width={100} height={40} fill={'#FFF'} />
          </div>
          <nav className={cx(classes.nav, showMenuMobile && classes.isOpen)}>
            <Link
              href={'/'}
              className={cx(
                classes.link,
                (currentRoute === '/' || currentRoute.startsWith('/games')) && classes.linkActive,
              )}
              onClick={() => setShowMenuMobile(false)}
            >
              Главная
            </Link>
            <Link
              href={'/catalog'}
              className={cx(classes.link, currentRoute === '/catalog' && classes.linkActive)}
              onClick={() => setShowMenuMobile(false)}
            >
              Каталог
            </Link>
            <Link
              href={'/blog'}
              className={cx(classes.link, currentRoute === '/blog' && classes.linkActive)}
              onClick={() => setShowMenuMobile(false)}
            >
              Блог
            </Link>
          </nav>
        </div>

        {!isDesktop ? (
          <div className={classes.burgerWrapper}>
            <Button isLink href={'/auth'}>
              Войти
            </Button>
            <Button className={classes.burgerBtn} isIcon onClick={changeShowMenuMobile}>
              {showMenuMobile ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={8} />}
            </Button>
          </div>
        ) : (
          <Button isLink href={'/auth'}>
            Войти
          </Button>
        )}
      </Container>
    </header>
  );
};
