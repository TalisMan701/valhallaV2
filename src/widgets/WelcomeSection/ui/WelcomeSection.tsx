'use client';

import React from 'react';
import classes from './WelcomeSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
export const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Card width={'full'} size={'sm'}>
          <CardHeader>
            <Heading textAlign='center'>Мониторинг сервисов игровых транзакций</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='center'>
              Мы уже 2 года занимаемся разработкой игр и за это время закончили 4 проекта
            </Text>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
