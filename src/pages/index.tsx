import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { Layout } from '../components/layout';

const Page: FC = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello, world!</p>
    <Link to="/about">about</Link>
  </Layout>
);
export default Page;
