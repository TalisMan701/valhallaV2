import React from 'react';
import classes from './Footer.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Telegram} from '~shared/ui/Icons/Telegram';
import {VK} from '~shared/ui/Icons/VK';
import {Youtube} from '~shared/ui/Icons/Youtube';
import {Market} from '~shared/ui/Icons/Market';
export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.socials}>
          <Telegram width={32} height={32} />
          <VK />
          <Youtube />
          <Market />
        </div>
        <span className={classes.mail}>mail@mail.ru</span>
      </Container>
    </footer>
  );
};
