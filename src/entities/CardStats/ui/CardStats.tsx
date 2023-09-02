'use client';

import React from 'react';
import classes from './CardStats.module.scss';
import {Card, CardBody, Text} from '@chakra-ui/react';
import {Title} from '~shared/ui/Title';

export const CardStats = () => {
  return (
    <>
      <Title title={'Статистика использования'} className={classes.title} />
      <Card width={'full'} size={'sm'}>
        <CardBody>
          <Text>Будет инфа</Text>
        </CardBody>
      </Card>
    </>
  );
};
