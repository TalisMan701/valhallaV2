import React from 'react';
import classes from './BlogSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Post} from '~entities/Post';

export const BlogSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <h1 className={classes.title}>Здесь мы будем писать о ходе разработки</h1>
        <Post />
      </Container>
    </section>
  );
};
