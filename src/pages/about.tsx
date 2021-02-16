import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { Layout } from '../components/layout';

const Page: FC = () => (
  <Layout>
    <h1>About</h1>
    <p>GatsbyJSでできたブログ</p>
    <Link to="/">home</Link>
  </Layout>
);
export default Page;
