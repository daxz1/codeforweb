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
    id: 1,
    icon: faHome,
    href: '/',
    title: 'News'
  },
  {
    id: 2,
    icon: faNewspaper,
    href: '/traffic',
    title: 'Traffic Lights'
  },
  {
    id: 3,
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
            id, icon, href, title
          } = MenuConfig[item];
          return (<a key={id} href={href}><FontAwesomeIcon icon={icon} /><span>{title}</span></a>)
        })}
      </M>
  )
};

export default memo(Menu);
