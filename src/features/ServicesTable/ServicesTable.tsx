'use client';

import React, {FC} from 'react';
import classes from './ServicesTable.module.scss';
import {ServicesTableProps} from './ServicesTable.types';
import {Card, CardBody, Text} from '@chakra-ui/react';

export const ServicesTable: FC<ServicesTableProps> = ({className}) => {
  return (
    <Card width={'full'}>
      <CardBody>
        <Text>Будет таблица</Text>
      </CardBody>
    </Card>
  );
};
