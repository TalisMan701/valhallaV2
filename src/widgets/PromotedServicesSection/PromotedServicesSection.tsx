'use client';
import React, {FC, useEffect, useState} from 'react';
import classes from './PromotedServicesSection.module.scss';
import {CardService} from '~entities/CardService/CardService';
import {Container} from '~shared/ui/Container/Container';
import {Title} from '~shared/ui/Title';
import ImageUploading from 'react-images-uploading';
import Axios from 'axios';
import {Button} from '~shared/ui/Button/Button';
import {PromotedServicesSectionProps} from './PromotedServicesSection.types';
import cx from 'classnames';
import {client} from '~shared/api/Client';

export const PromotedServicesSection: FC<PromotedServicesSectionProps> = ({
  className,
  services,
}) => {
  const [images, setImages] = React.useState([]);
  const [image, setImage] = useState<any>();
  const maxNumber = 69;

  useEffect(() => {
    client.games.getGames().then((response) => console.log(response));
    client.services.getServicesByGameId(1).then((response) => console.log(response));
  }, []);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleImg = (e) => {
    if (images[0]) {
      setImage({
        src: new URL.createObjectURL(images[0]),
        alt: images[0].name,
      });
    }
  };

  const profileUpload = async () => {
    if (images[0]) {
      const formData = new FormData();
      console.log(images[0]);
      formData.append('file', images[0]['data_url']);
      formData.append('upload_preset', 'ew37mijt');
      let data = '';
      await Axios.post('https://api.cloudinary.com/v1_1/dw8qxruyw/image/upload', formData).then(
        (response) => {
          data = response.data['secure_url'];
        },
      );
      return data;
    }
  };

  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container}>
        <Title title={'Лучшие сервисы'} />
        <div className={classes.games}>
          {services.map((service) => (
            <CardService key={`game_${service.id}`} service={service} />
          ))}
        </div>
        {/* <div>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey='data_url'
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className='upload__image-wrapper'>
                <button
                  style={isDragging ? {color: 'red'} : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className='image-item'>
                    <img src={image['data_url']} alt='' width='100' />
                    <div className='image-item__btn-wrapper'>
                      <button onClick={() => onImageUpdate(index)}>Update</button>
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          <Button onClick={() => profileUpload()}>Upload</Button>
        </div>*/}
      </Container>
    </section>
  );
};
