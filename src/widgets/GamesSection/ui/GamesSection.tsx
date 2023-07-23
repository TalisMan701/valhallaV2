import React from 'react';
import classes from './GamesSection.module.scss';
import {games} from '~shared/config/games';
import {CardGame} from '~entities/CardGame/ui/CardGame';
import {Container} from '~shared/ui/Container/Container';
export const GamesSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <h2 className={classes.title}>Наши проекты</h2>
        <div className={classes.games}>
          {games.map((game) => (
            <CardGame key={`game_${game.id}`} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
};
