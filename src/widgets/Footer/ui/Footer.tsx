'use client';

import React, {useEffect, useState} from 'react';
import classes from './Footer.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Telegram} from '~shared/ui/Icons/Telegram';
import {VK} from '~shared/ui/Icons/VK';
import {Youtube} from '~shared/ui/Icons/Youtube';
import {Button} from '~shared/ui/Button/Button';
import {useDisclosure} from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import {FormControl, FormLabel, Input, Textarea} from '@chakra-ui/react';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import {isEmailValid} from '~shared/utils/isEmailValid';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
export const Footer = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidTitle, setInvalidTitle] = useState<boolean>(false);
  const [invalidText, setInvalidText] = useState<boolean>(false);
  const {isPhone} = useWindowWidth();
  const store = useStore(storeUser);

  const resetState = () => {
    setEmail('');
    setTitle('');
    setText('');
    setInvalidEmail(false);
    setInvalidTitle(false);
    setInvalidText(false);
  };

  useEffect(() => {
    if (!isOpen) {
      resetState();
    }
    if (store.user?.user?.email) {
      setEmail(store.user.user.email);
    }
  }, [isOpen]);

  const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidEmail(false);
    setEmail(value);
    if (value.trim() === '' || !isEmailValid(value)) {
      setInvalidEmail(true);
    }
  };

  const handlerChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvalidTitle(false);
    setTitle(value);
    if (value.trim() === '') {
      setInvalidTitle(true);
    }
  };

  const handlerChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInvalidText(false);
    setText(value);
    if (value.trim() === '') {
      setInvalidText(true);
    }
  };

  const disabledBtn = !email || !title || !text || invalidEmail || invalidTitle || invalidText;

  return (
    <>
      <footer className={classes.footer}>
        <Container className={classes.container}>
          <div className={classes.socials}>
            <Button isIcon>
              <Telegram width={32} height={32} />
            </Button>
            <Button isIcon>
              <VK />
            </Button>
            <Button isIcon>
              <Youtube />
            </Button>
          </div>

          <Button text onClick={onOpen}>
            Помощь
          </Button>
        </Container>
      </footer>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={isPhone ? 'full' : 'md'}>
        <ModalOverlay bg='blackAlpha.500' backdropFilter='blur(5px)' />
        <ModalContent>
          <ModalHeader>Форма обратной связи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={2}>
              <FormLabel fontSize={'sm'}>
                Email<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Input
                isInvalid={invalidEmail}
                placeholder='Email'
                onChange={handlerChangeEmail}
                value={email}
              />
            </FormControl>
            <FormControl mb={2}>
              <FormLabel fontSize={'sm'}>
                Заголовок<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Input
                isInvalid={invalidTitle}
                placeholder='Заголовок'
                onChange={handlerChangeTitle}
                value={title}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'sm'}>
                Письмо<span style={{color: '#E53E3E'}}>*</span>
              </FormLabel>
              <Textarea
                isInvalid={invalidText}
                placeholder='Письмо'
                onChange={handlerChangeText}
                value={text}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button disabled={disabledBtn}>Отправить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
