import React, {FC, useState} from 'react';
import classes from './Iframe.module.scss';
import {IframeProps} from './Iframe.types';
import Image from 'next/image';

export const Iframe: FC<IframeProps> = ({className, src, imgURL}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div className={className} style={{position: 'relative', zIndex: 100}}>
      {!iframeLoaded && (
        <Image
          objectFit={'cover'}
          fill
          src={imgURL ? imgURL : '/assets/images/game_1.png'}
          alt={'card_img'}
        />
      )}
      <iframe
        src={src}
        frameBorder='0'
        style={{width: '100%', height: 500}}
        onLoad={handleIframeLoad}
      />
    </div>
  );
};
