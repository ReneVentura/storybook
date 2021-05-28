import React, { Component } from 'react';
import './styles.css'

const Art1 = ({title, desc}) =>
(

    <article class="c-article">
      <a class="c-article__link" href="#">
        <div>
          <header>
            <h3 class="c-article__heading">{title}</h3>
          </header>
          <div class="c-article__content">
           {desc}
          </div>
        </div>
        <div class="c-article__img-wrapper">
          <img class="c-article__img" src="https://assets.codepen.io/204808/shin-yun-bok-ink.png" alt="Ink transition with PNG sprite" />
        </div>
      </a>
    </article>
)

export default Art1