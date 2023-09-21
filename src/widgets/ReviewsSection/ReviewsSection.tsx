'use client';
import React, {FC, useState} from 'react';
import classes from './ReviewsSection.module.scss';
import {ReviewsSectionProps} from './ReviewsSection.types';
import cx from 'classnames';
import {Container} from '~shared/ui/Container/Container';
import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {Review} from '~entities/Review';
import {Button} from '~shared/ui/Button/Button';

export const ReviewsSection: FC<ReviewsSectionProps> = ({className, reviews}) => {
  const [text, setText] = useState<string>('');
  const [invalidText, setInvalidText] = useState<boolean>(false);

  const handlerChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInvalidText(false);
    setText(value);
    if (value.trim() === '') {
      setInvalidText(true);
    }
  };

  const disabledBtn = !text || invalidText;

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
              <div className={classes.reviews}>
                {reviews.map((review) => (
                  <Review
                    key={`review_${review.id}`}
                    username={review.attributes.user.data.attributes.username}
                    text={review.attributes.content}
                    avatarURL={review.attributes.user.data.attributes.icon}
                  />
                ))}
              </div>
            ) : (
              <Text>Нет отзывов на данный сервис 🤨</Text>
            )}
            <FormControl mb={2}>
              <FormLabel>Оставьте отзыв</FormLabel>
              <Textarea placeholder='Письмо' onChange={handlerChangeText} value={text} />
            </FormControl>
            <div className={classes.btnWrapper}>
              <Button disabled={disabledBtn}>Отправить</Button>
            </div>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
