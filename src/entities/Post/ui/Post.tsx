import React from 'react';
import classes from './Post.module.scss';
import {Button} from '~shared/ui/Button/Button';
import {ArrowRight} from '~shared/ui/Icons/ArrowRight';

export const Post = () => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <h2 className={classes.title}>Релиз Brazilian Ronin</h2>
        <span className={classes.date}>01.01.2022</span>
        <p className={classes.description}>
          С удовольствием представляем Brazilian Ronin - новый 3D платформер, созданный на мощном
          движке Unity. Действие игры разворачивается в мире средневековой Азии, где вы, главный
          герой, обнаружите себя в незнакомой обстановке и окажетесь втянутыми в захватывающую
          историю о поиске дома. Сражайтесь с ниндзя, пробирайтесь сквозь многочисленные
          препятствия, используйте свои навыки и интуицию, чтобы раскрыть тайну своего попадания в
          этот непривычный мир. Откройте для себя удивительную средневековую Азию и преодолейте все
          трудности на своем пути к дому. Brazilian Ronin предлагает игрокам уникальное сочетание
          глубокого сюжета, захватывающих битв и потрясающей графики. Эта игра о смелости,
          решительности и любви к приключениям. Присоединяйтесь к нам и начните свое путешествие в
          Brazilian Ronin уже сегодня!
        </p>
        <div className={classes.row}>
          <Button>Удалить из блога</Button>
          <Button text>
            Читать <ArrowRight width={12} height={12} />
          </Button>
        </div>
      </div>
    </div>
  );
};
