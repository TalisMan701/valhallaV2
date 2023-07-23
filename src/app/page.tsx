import React from 'react';
import {Line} from '~shared/ui/Line/Line';
import {WelcomeSection} from '~widgets/WelcomeSection';
import {GamesSection} from '~widgets/GamesSection';

export default function Page() {
  return (
    <>
      <Line height='45px' width='200vw' color='#FFDC62' rotate={135} right='0px' top='190px' />
      <Line height='120px' width='200vw' color='#E97839' rotate={135} right='-100px' top='190px' />
      <Line height='45px' width='200vw' color='#C52D36' rotate={135} right='-275px' top='190px' />
      <WelcomeSection />
      <GamesSection />
      <Line height='55px' width='200vw' color='#FFDC62' rotate={135} left='-400px' />
      <Line height='135px' width='200vw' color='#E97839' rotate={135} left='-280px' />
      <Line height='55px' width='200vw' color='#C52D36' rotate={135} left='-80px' />
    </>
  );
}
