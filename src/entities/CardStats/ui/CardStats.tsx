'use client';

import React from 'react';
import classes from './CardStats.module.scss';
import {Box, Card, CardBody, Grid, GridItem, Text, Icon} from '@chakra-ui/react';
import {Title} from '~shared/ui/Title';
import {ChartForDealToday} from '~entities/ChartForDealToday';
import {BsCurrencyExchange} from 'react-icons/bs';
import {BiCommentDetail, BiCoin} from 'react-icons/bi';
import {Button} from '~shared/ui/Button/Button';

export const CardStats = () => {
  return (
    <>
      <Title title={'Статистика использования'} className={classes.title} />
      <Card width={'full'} size={'sm'}>
        <CardBody>
          <Grid templateColumns={{md: '50% 50%', base: '100%'}} gap={0}>
            <GridItem
              order={{md: -1, base: 1}}
              display='flex'
              flexDirection='column'
              justifyContent={'space-between'}
              mr={6}
            >
              <Box display='flex' flexDirection='column' gap={2} mb={2}>
                <Box display='flex' alignItems='center' justifyContent={'space-between'}>
                  <Text>Количество транзакций:</Text>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Text>0</Text>
                    <Icon as={BiCoin} />
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'}>
                  <Text>Количество отзывов: </Text>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Text>0</Text>
                    <Icon as={BiCommentDetail} />
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent={'space-between'}>
                  <Text>Средний объем обмена: </Text>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Text>0</Text>
                    <Icon as={BsCurrencyExchange} />
                  </Box>
                </Box>
              </Box>
              <Button className={classes.btn}>
                <Text>Подробнее</Text>
              </Button>
            </GridItem>
            <GridItem>
              <ChartForDealToday />
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};
