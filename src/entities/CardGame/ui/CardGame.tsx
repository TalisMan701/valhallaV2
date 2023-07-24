'use client';
import React, {FC} from 'react';
import classes from './CardGame.module.scss';
import {IGame} from '~shared/types/IGame';
import Image from 'next/image';
import {Button} from '~shared/ui/Button/Button';
import {ArrowRight} from '~shared/ui/Icons/ArrowRight';
import {Tag} from '~shared/ui/Tag/Tag';

interface CardGameProps {
  game: IGame;
}
export const CardGame: FC<CardGameProps> = ({game}) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgWrapper}>
        <Image objectFit={'cover'} fill src={game.image} alt={'card_img'} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{game.title}</h3>
        <div className={classes.tags}>
          {game.tags.map((tag) => (
            <Tag key={`card_game_tag_${tag.id}`} label={tag.label} />
          ))}
        </div>
        <Button isLink href={`/games/${game.id}`}>
          Подробнее <ArrowRight width={12} height={12} />
        </Button>
      </div>
    </div>
  );
};
