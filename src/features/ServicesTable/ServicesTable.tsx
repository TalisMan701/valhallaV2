'use client';

import React, {FC} from 'react';
import classes from './ServicesTable.module.scss';
import {ServicesTableProps} from './ServicesTable.types';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import {DataTable} from '~entities/DataTable';
import {createColumnHelper} from '@tanstack/table-core';

type UnitConversion = {
  service: string;
  price: string;
  reviews: string;
};

const data: UnitConversion[] = [
  {
    service: 'AppGallery',
    price: '100р/1n',
    reviews: '0/100',
  },
  {
    service: 'IceGames',
    price: '110р/1n',
    reviews: '0/100',
  },
  {
    service: 'SteamBalance',
    price: '90р/1n',
    reviews: '1/100',
  },
  {
    service: 'SteamBuy',
    price: '95р/1n',
    reviews: '0/100',
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor('service', {
    cell: (info) => info.getValue(),
    header: 'Сервис',
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: 'Цена валюты*',
  }),
  columnHelper.accessor('reviews', {
    cell: (info) => info.getValue(),
    header: 'Отзывы',
    meta: {
      isNumeric: true,
    },
  }),
];

export const ServicesTable: FC<ServicesTableProps> = ({className}) => {
  return (
    <>
      <Card width={'full'}>
        <CardHeader>
          <Heading>Статистика цен</Heading>
        </CardHeader>
        <CardBody>
          <DataTable columns={columns} data={data} />
        </CardBody>
      </Card>
      <Text className={classes.text}>
        *Мы учитываем комиссии сервисов, но мы не учитываем переменные издержки, связанные с
        разницей курсов валют в Steam, а также с комиссией платежных систем. Для уточнения
        окончательной цены посетите обменный сервис
      </Text>
    </>
  );
};
