import React, { memo } from 'react';

import {
  faHome,
  faNewspaper,
  faIcicles,
  faBaseballBall,
  faTv
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as M } from 'react-burger-menu';

import '../../styles/normalize.scss';
import '../../styles/global.scss';
import 'bulma/bulma.sass';

const CONFIG = [
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
    id: 4,
    icon: faBaseballBall,
    href: '/bounce',
    title: 'Bounce'
  },
  {
    id: 5,
    icon: faIcicles,
    href: '/custom',
    title: 'Custom Store'
  }
];

const Menu = () => {
  return (
      <M>
        { Object.keys(CONFIG).map((item, key) => {
          const {
            id, icon, href, title
          } = CONFIG[item];
          return (<a key={id} href={href}><FontAwesomeIcon icon={icon} /><span>{title}</span></a>)
        })}
      </M>
  )
};

export default memo(Menu);
