import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';

export const Header: FC = () => {
  return (
    <header>
      <h1>
        <Link to="/">Asakatsu Blog</Link>
      </h1>
    </header>
  );
};
