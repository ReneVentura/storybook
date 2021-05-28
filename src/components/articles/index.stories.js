import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Art1 from './art1'
import Art2 from './art2'
import Art3 from './art3'

export default {
    title: 'Body/Articulos',
    decorators: [withKnobs],
  };

  export const articulo1 = () => (
      <Art1 title={text('titulo','titulo') } desc={text('descripcion','esto es una prueba')}/>
  );

  export const articulo2 = () => (
    <Art2 title={text('titulo','titulo') } desc={text('descripcion','esto es una prueba')}/>
);
export const articulo3 = () => (
    <Art3 title={text('titulo','titulo') } desc={text('descripcion','esto es una prueba')}/>
);
