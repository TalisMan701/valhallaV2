'use client';

import React from 'react';
import classes from './Footer.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Telegram} from '~shared/ui/Icons/Telegram';
import {VK} from '~shared/ui/Icons/VK';
import {Youtube} from '~shared/ui/Icons/Youtube';
import {Button} from '~shared/ui/Button/Button';
export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.socials}>
          <Button isIcon>
            <Telegram width={32} height={32} />
          </Button>
          <Button isIcon>
            <VK />
          </Button>
          <Button isIcon>
            <Youtube />
          </Button>
        </div>
        <Button text>Помощь</Button>
      </Container>
    </footer>
  );
};
