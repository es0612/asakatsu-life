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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};
