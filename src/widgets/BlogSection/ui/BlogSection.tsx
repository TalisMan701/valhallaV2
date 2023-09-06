import React from 'react';
import classes from './BlogSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Post} from '~entities/Post';

export const BlogSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Post />
      </Container>
    </section>
  );
};
