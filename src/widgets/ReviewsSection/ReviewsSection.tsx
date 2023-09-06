'use client';
import React, {FC} from 'react';
import classes from './ReviewsSection.module.scss';
import {ReviewsSectionProps} from './ReviewsSection.types';
import cx from 'classnames';
import {Container} from '~shared/ui/Container/Container';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import {Review} from '~entities/Review';

export const ReviewsSection: FC<ReviewsSectionProps> = ({className, reviews}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <Card size='sm'>
          <CardHeader>
            <Heading textAlign={'center'}>Отзывы</Heading>
          </CardHeader>
          <CardBody
            display={'flex'}
            flexDirection={'column'}
            gap={4}
            pl={{base: 2, sm: 4, md: 8, lg: 12}}
            pr={{base: 2, sm: 4, md: 8, lg: 12}}
          >
            {reviews.length > 0 ? (
              <>
                {reviews.map((review) => (
                  <Review
                    key={`review_${review.id}`}
                    username={review.fields.assigneeName[0]}
                    text={review.fields.content}
                    avatarURL={review.fields.assigneeIcon[0].url}
                  />
                ))}
              </>
            ) : (
              <Text>Нет отзывов на данный сервис</Text>
            )}
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
