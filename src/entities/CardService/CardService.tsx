'use client';
import React, {FC} from 'react';
import classes from './CardService.module.scss';
import Image from 'next/image';
import {Button} from '~shared/ui/Button/Button';
import {Tag} from '~shared/ui/Tag/Tag';
import {CardServiceProps} from './CardService.types';

export const CardService: FC<CardServiceProps> = ({service}) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgWrapper}>
        <Image objectFit={'cover'} fill src={service.fields.previewImg[0].url} alt={'card_img'} />
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{service.fields.name}</h3>
        <div className={classes.tags}>
          {service.fields.tags.map((tag) => (
            <Tag key={`card_game_tag_${tag}`} label={tag} />
          ))}
        </div>
        <Button isLink href={`/service/${service.id}`}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
