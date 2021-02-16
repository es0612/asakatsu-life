import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import type { FooterComponentQuery } from '../../types/graphql-types';

export const Footer: FC = () => {
  const data = useStaticQuery<FooterComponentQuery>(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `);

  return (
    <footer>
      <p>&copy; {data.site?.siteMetadata?.author}</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href={`mailto:${data.site?.siteMetadata?.email}`}>Contact</a>
        </li>
      </ul>
    </footer>
  );
};
