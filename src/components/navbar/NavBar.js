import React, { Component } from 'react';
import './styles.css'
import PropTypes from 'prop-types'; 

const NavBar = ({tab1 ,tab2, tab3, tab4, onClick})=>
(
    <div>

         <nav class="c-main-menu" aria-labelledby="mainmenulabel">
      
            <h2 id="mainmenulabel" class="u-visually-hidden">Main Menu</h2>
            <ul class="c-main-menu__list">
                <li onClick={onClick}><a class="c-main-menu__link" href="#">{tab1}</a></li>
                <li onClick={onClick}><a aria-current="page" class="is-magic-active c-main-menu__link" href="#">{tab3}</a></li>
                <li onClick={onClick}><a class="c-main-menu__link" href="#">{tab2}</a></li>
                <li onClick={onClick}><a class="c-main-menu__link" href="#">{tab4}</a></li>
            </ul>
        </nav>
    </div>
)


export default NavBar;
