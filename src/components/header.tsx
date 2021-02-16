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
          description
        }
      }
    }
  `);

  return (
    <header>
      <h1>
        <Link to="/">{data.site?.siteMetadata?.title}</Link>
      </h1>
      <h3>{data.site?.siteMetadata?.description}</h3>
    </header>
  );
};
