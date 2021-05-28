import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Thanks from './thnx'
export default {
    title: 'Footer/Thanks',
    decorators: [withKnobs],
  };

  

export const thnx = () =>(
    <Thanks/>
)