import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import React from 'react';

export const Header: FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    </header>
  );
};
