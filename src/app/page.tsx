import React from 'react';
import {Line} from '~shared/ui/Line/Line';

export default function Page(){
  return (
    <div>
      Hello world
      <Line
        height="90px"
        width="200vw"
        color="#FFDC62"
        rotate={135}
        right="0px"
        top="190px"
      />
      <Line
        height="192px"
        width="200vw"
        color="#E97839"
        rotate={135}
        right="-15%"
        top="190px"
      />
      <Line
        height="90px"
        width="200vw"
        color="#C52D36"
        rotate={135}
        right="-38%"
        top="190px"
      />
    </div>
  );
};