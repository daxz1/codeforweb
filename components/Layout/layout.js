import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Menu from "../Menu/menu";

import '../../styles/normalize.scss';
import '../../styles/global.scss';
import 'bulma/bulma.sass';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main className="container">
        {children}
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(Layout);
