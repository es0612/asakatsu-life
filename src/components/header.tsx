import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { HeaderComponentQuery } from '../../types/graphql-types';

export const Header: FC = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <h1>
        <Link to="/">{data.site?.siteMetadata?.title}</Link>
      </h1>
    </header>
  );
};
