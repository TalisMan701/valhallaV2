import React from 'react';
import classes from './CardStats.module.scss';
import Image from 'next/image';
import ClockIconSVG from '~shared/assets/images/svg/clock.svg';
import NumbersIconSVG from '~shared/assets/images/svg/numbers.svg';
import CloudIconSVG from '~shared/assets/images/svg/cloud.svg';
import CoinIconSVG from '~shared/assets/images/svg/coin.svg';
import HammerIconSVG from '~shared/assets/images/svg/hammer.svg';
import VikingIconSVG from '~shared/assets/images/svg/viking.svg';
import HammerAndAnvilIconSVG from '~shared/assets/images/svg/hammerAndAnvil.svg';
import MedalIconSVG from '~shared/assets/images/svg/medal.svg';

export const CardStats = () => {
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>Ваш прогресс в To Valhalla</h3>
      <div className={classes.table}>
        <div className={classes.column}>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={ClockIconSVG}
                layout='responsive'
                alt={'clock-svg'}
              />
            </div>
            <span>0д. 3ч. 0мин.</span>
            <span>Всего в игре</span>
          </div>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={NumbersIconSVG}
                layout='responsive'
                alt={'numbers-svg'}
              />
            </div>
            <span>20</span>
            <span>Игровых сессий</span>
          </div>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={CloudIconSVG}
                layout='responsive'
                alt={'cloud-svg'}
              />
            </div>
            <span>0д. 23ч. 12мин.</span>
            <span>Время в полёте</span>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={CoinIconSVG}
                layout='responsive'
                alt={'coin-svg'}
              />
            </div>
            <span>102</span>
            <span>Всего монет собрано</span>
          </div>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={HammerIconSVG}
                layout='responsive'
                alt={'hammer-svg'}
              />
            </div>
            <span>0/8</span>
            <span>Молотов разблокировано</span>
          </div>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={VikingIconSVG}
                layout='responsive'
                alt={'viking-svg'}
              />
            </div>
            <span>0/3</span>
            <span>Костюмов разблокировано</span>
          </div>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={HammerAndAnvilIconSVG}
                layout='responsive'
                alt={'hammer-and-anvil-svg'}
              />
            </div>
            <span>0/5</span>
            <span>Артефактов восстановлено</span>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.item}>
            <div className={classes.imageWrapper}>
              <Image
                priority
                quality={100}
                src={MedalIconSVG}
                layout='responsive'
                alt={'medal-svg'}
              />
            </div>
            <span>Лучший счёт</span>
          </div>
          <div className={classes.record}>
            <span className={classes.recordItem}>1 536m</span>
            <span className={classes.recordItem}>Midgard</span>
          </div>
        </div>
      </div>
    </div>
  );
};
