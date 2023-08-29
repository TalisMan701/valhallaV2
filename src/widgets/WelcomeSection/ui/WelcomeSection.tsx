'use client';

import React, {useState} from 'react';
import classes from './WelcomeSection.module.scss';
import Image from 'next/image';
import {Container} from '~shared/ui/Container/Container';
export const WelcomeSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <section className={classes.section}>
      <Container>
        <div style={{position: 'relative', zIndex: 100, marginTop: 40}}>
          {!iframeLoaded && (
            <Image objectFit={'cover'} fill src={'/assets/images/game_1.png'} alt={'card_img'} />
          )}
          <iframe
            src='https://steambalance.ru/'
            frameBorder='0'
            style={{width: '100%', height: 500}}
            onLoad={handleIframeLoad}
          />
        </div>
      </Container>
      <Container className={classes.container}>
        <div className={classes.content}>
          <h1 className={classes.title}>Привет! Мы команда Ready Set Cock</h1>
          <p className={classes.description}>
            Мы уже 2 года занимаемся разработкой игр и за это время закончили 4 проекта
          </p>
        </div>
        <div className={classes.imageWrapper}>
          <Image
            objectFit={'cover'}
            priority
            fill
            src={'/assets/images/welcome.png'}
            alt={'welcome_img'}
          />
        </div>
      </Container>
    </section>
  );
};
