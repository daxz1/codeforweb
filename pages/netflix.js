import React, { memo } from 'react';
import { Profile, NetflixHeader } from '../components';

import '../styles/netflix/netflix.scss';

/**
 *
 * @type {*[]}
 */
const PROFILES = [
  {
    name: 'Morwen',
    picture:
      'https://occ-0-299-300.1.nflxso.net/art/c83fe/6c218aba13637fff1554e17c73c4e2481e6c83fe.png',
  },
  {
    name: 'Éowyn',
    picture:
      'https://occ-0-299-300.1.nflxso.net/art/9b3ac/8794c6ddda9938b95beded514a5cd38b7019b3ac.png',
  },
  {
    name: 'Galadriel',
    picture:
      'https://occ-0-299-300.1.nflxso.net/art/38a46/8933fd1cd7004960c16215c5fd33036b39b38a46.png',
  },
  {
    name: 'Arwen',
    picture:
      'https://occ-0-299-300.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png',
  },
  {
    name: 'Gollum',
    picture:
      'https://occ-0-299-300.1.nflxso.net/art/c0c0e/af353b54475c9667ac96f986de8003b72edc0c0e.png',
  },
];

/**
 * Netflix Component
 * @returns {*}
 * @constructor
 */
const Netflix = () => (
  <>
    <NetflixHeader />
    <div className="netflix">
      <div className="navigation">
        <div className="navigation__menu">
          <a href="/netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              className="navigation__logo"
            />
          </a>
        </div>
      </div>

      <div className="profiles">
        <div className="profiles__title">
          <h1>Who&apos;s watching?</h1>
        </div>
        <div className="profiles_grid">
          {PROFILES.map((profile) => {
            const { name, picture } = profile;
            return <Profile key={name} name={name} picture={picture} />;
          })}
        </div>
      </div>
    </div>
  </>
);

export default memo(Netflix);