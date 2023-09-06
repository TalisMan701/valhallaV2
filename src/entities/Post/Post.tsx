'use client';
import React, {FC} from 'react';
import classes from './Post.module.scss';
import {Button} from '~shared/ui/Button/Button';
import {ArrowRight} from '~shared/ui/Icons/ArrowRight';
import {Box, Card, CardBody, CardHeader, Heading, Img, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {PostProps} from './Post.types';
import moment from 'moment';
import cx from 'classnames';

export const Post: FC<PostProps> = ({className, fullMode = false, post}) => {
  return (
    <Card size={'sm'}>
      <CardHeader>
        <Heading>{post.fields.headline}</Heading>
        <Text>{moment(post.createdTime).format('DD.MM.YY')}</Text>
      </CardHeader>
      <CardBody>
        <Box
          display={'grid'}
          gridTemplateColumns={fullMode ? {base: '1fr'} : {base: '1fr', md: '1fr 1fr'}}
          gap={4}
          mb={4}
        >
          <Text order={fullMode ? 1 : 0}>
            {fullMode ? post.fields.content : post.fields.preview}
          </Text>
          <div className={cx(classes.imgWrapper, fullMode && classes['imgWrapper--fullMode'])}>
            <Img objectFit={'cover'} fill src={post.fields.image[0].url} alt={'card_img'} />
          </div>
        </Box>
        {!fullMode && (
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button isLink href={`/blog/${post.id}`}>
              <Text>Читать</Text>
            </Button>
          </Box>
        )}
      </CardBody>
    </Card>
  );
};
