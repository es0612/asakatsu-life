import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';

export const Footer: FC = () => (
  <footer>
    <p>&copy; Shinya Ema</p>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="mailto:emashinya0612@gmail.com">Contact</a>
      </li>
    </ul>
  </footer>
);
