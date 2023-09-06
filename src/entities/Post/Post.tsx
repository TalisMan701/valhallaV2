'use client';
import React, {FC} from 'react';
import classes from './Post.module.scss';
import {Button} from '~shared/ui/Button/Button';
import {ArrowRight} from '~shared/ui/Icons/ArrowRight';
import {Box, Card, CardBody, CardHeader, Heading, Img, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {PostProps} from './Post.types';

export const Post: FC<PostProps> = ({className, fullMode = false}) => {
  return (
    <Card size={'sm'}>
      <CardHeader>
        <Heading>Заголовок поста</Heading>
        <Text>01.01.2023</Text>
      </CardHeader>
      <CardBody>
        <Box
          display={'grid'}
          gridTemplateColumns={fullMode ? {base: '1fr'} : {base: '1fr', md: '1fr 1fr'}}
          gap={4}
          mb={4}
        >
          <Text order={fullMode ? 1 : 0}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderi
          </Text>
          <div className={classes.imgWrapper}>
            <Img
              objectFit={'cover'}
              fill
              src={
                'https://pibig.info/uploads/posts/2022-06/1655681931_1-pibig-info-p-krasivie-kartinki-s-lesom-krasivo-1.jpg'
              }
              alt={'card_img'}
            />
          </div>
        </Box>
        {!fullMode && (
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button isLink href={'/blog/1'}>
              <Text>Читать</Text>
            </Button>
          </Box>
        )}
      </CardBody>
    </Card>
  );
};
