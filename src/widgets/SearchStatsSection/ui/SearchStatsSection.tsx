'use client';
import React, {useState} from 'react';
import classes from './SearchStatsSection.module.scss';
import {InputText} from '~shared/ui/InputText/InputText';
import {CardStats} from '~entities/CardStats';
import {Container} from '~shared/ui/Container/Container';

export const SearchStatsSection = () => {
  const [search, setSeacrch] = useState<string>('');

  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrch(e.target.value);
  };

  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <InputText
          value={search}
          onChange={handlerChangeSearch}
          placeholder={'Поиск по ID'}
          withSearchIcon
          className={classes.searchInput}
        />
        <CardStats />
      </Container>
    </section>
  );
};
