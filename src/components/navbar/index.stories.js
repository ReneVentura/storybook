import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NavBar from './NavBar'

export default {
  title: 'Header/Menu',
  decorators: [withKnobs],
};

export const navbar = () => (
  <NavBar tab1={text('tab1', 'default')} tab2={text('tab2', 'default')} tab3={text('tab3', 'default')} tab4={text('tab4', 'default')} onClick={action('redirigir a pagina correspondiente')}></NavBar>
);

