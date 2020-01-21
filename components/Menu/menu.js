import React, { memo } from 'react';

import {
  faHome,
  faNewspaper,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as M } from 'react-burger-menu';

import '../../styles/normalize.scss';
import '../../styles/global.scss';
import 'bulma/bulma.sass';

const MenuConfig = [
  {
    icon: faHome,
    href: '/',
    title: 'Home'
  },
  {
    icon: faNewspaper,
    href: '/',
    title: 'News'
  },
  {
    icon: faClock,
    href: '/',
    title: 'Netflix'
  },
];

const Menu = () => {
  return (
      <M>
        { Object.keys(MenuConfig).map((item, key) => {
          const {
            icon, href, title
          } = MenuConfig[item];
          return (<a href={href}><FontAwesomeIcon icon={icon} /><span>{title}</span></a>)
        })}
      </M>
  )
};

export default Menu;
