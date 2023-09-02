'use client';
import React, {useState} from 'react';
import classes from './SearchStatsSection.module.scss';
import {InputText} from '~shared/ui/InputText/InputText';
import {CardStats} from '~entities/CardStats';
import {Container} from '~shared/ui/Container/Container';
import {Select} from 'chakra-react-select';
import {Card, CardBody, CardHeader, Heading} from '@chakra-ui/react';

export const SearchStatsSection = () => {
  const [search, setSearch] = useState<string>('');

  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];

  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Card width='full' align='center' size={'sm'}>
          <CardHeader>
            <Heading>Выберите игру</Heading>
          </CardHeader>
          <CardBody width='85%'>
            <Select
              className={classes.searchInput}
              placeholder={'Поиск'}
              closeMenuOnSelect={false}
              options={options}
              isClearable
            />
          </CardBody>
        </Card>

        <CardStats />
      </Container>
    </section>
  );
};
