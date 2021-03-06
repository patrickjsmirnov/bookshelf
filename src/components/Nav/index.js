import React from 'react';
import { css } from 'astroturf';
import Menu from '../Menu';

const styles = css`
  .nav {
    color: black;
  }
`;

const Nav = () => (
  <div className={styles.nav}>
    <Menu />
  </div>
);

export default Nav;
