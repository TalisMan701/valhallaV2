import React from 'react';
import classes from './WelcomeSection.module.scss';
import Image from 'next/image';
import {Container} from '~shared/ui/Container/Container';
export const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <div className={classes.content}>
          <h1 className={classes.title}>Привет! Мы команда Ready Set Cock</h1>
          <p className={classes.desription}>
            Мы уже 2 года занимаемся разработкой игр и за это время закончили 4 проекта
          </p>
        </div>
        <div className={classes.imageWrapper}>
          <Image objectFit={'cover'} fill src={'/assets/images/welcome.png'} alt={'welcome_img'} />
        </div>
      </Container>
    </section>
  );
};
