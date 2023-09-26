'use client';
import React, {FC, useEffect, useMemo, useState} from 'react';
import classes from './SearchStatsSection.module.scss';
import {CardStats} from '~entities/CardStats';
import {Container} from '~shared/ui/Container/Container';
import {Select} from 'chakra-react-select';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import {SearchStatsSectionProps} from './SearchStatsSection.types';
import cx from 'classnames';

import {storeSelectedGame, setSelectedGame} from '~shared/store/Catalog';
import {useStore} from 'effector-react';
import {IGame} from '~shared/types/IGame';
import {setSelectedService, storeSelectedService} from '~shared/store/SelectedService';

interface IOption {
  value: IGame;
  label: string;
}

export const SearchStatsSection: FC<SearchStatsSectionProps> = ({className, games}) => {
  const {selectedGame} = useStore(storeSelectedGame);
  const {selectedService, isLoading: isLoadingGetSelectedService} = useStore(storeSelectedService);

  const options: IOption[] = useMemo(() => {
    return games.map((game) => ({value: game, label: game.attributes.name}));
  }, [games]);

  useEffect(() => {
    return () => {
      setSelectedService(null);
      setSelectedGame(null);
    };
  }, []);

  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container}>
        <Card width='full' align='center' size={'sm'}>
          <CardHeader>
            <Heading>Выберите игру</Heading>
          </CardHeader>
          <CardBody width='85%'>
            <Select
              className={classes.searchInput}
              placeholder={'Поиск'}
              onChange={(option) => {
                setSelectedGame(option?.value ?? null);
                setSelectedService(null);
              }}
              closeMenuOnSelect={false}
              options={options}
              isClearable
              blurInputOnSelect
            />
          </CardBody>
        </Card>
        {selectedGame && (selectedService || isLoadingGetSelectedService) && <CardStats />}
      </Container>
    </section>
  );
};
