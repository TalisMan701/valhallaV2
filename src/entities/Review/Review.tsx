'use client';
import React, {FC} from 'react';
import classes from './Review.module.scss';
import {ReviewProps} from './Review.types';
import cx from 'classnames';
import {Avatar, Box, Text} from '@chakra-ui/react';

export const Review: FC<ReviewProps> = ({className, text, username, avatarURL}) => {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'80px 1fr'}
      gap={2}
      className={cx(classes.review, className)}
    >
      <Avatar size='lg' name={username} src={avatarURL} />
      <Box className={classes.content}>
        <Text fontSize={'lg'} fontWeight={500}>
          {username}
        </Text>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};
