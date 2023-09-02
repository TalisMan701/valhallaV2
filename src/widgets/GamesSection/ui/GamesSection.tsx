import React, {FC} from 'react';
import classes from './GamesSection.module.scss';
import {CardGame} from '~entities/CardGame/ui/CardGame';
import {Container} from '~shared/ui/Container/Container';
import {IGame} from '~shared/types/IGame';
import {Title} from '~shared/ui/Title';

interface GamesSectionProps {
  games: IGame[];
}

export const GamesSection: FC<GamesSectionProps> = ({games}) => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Title title={'Лучшие сервисы'} />
        <div className={classes.games}>
          {games.map((game) => (
            <CardGame key={`game_${game.id}`} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
};
