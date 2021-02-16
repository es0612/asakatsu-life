import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';
import { Layout } from '../components/layout';

const Page: FC = () => (
  <Layout>
    <h1>Home</h1>
    <br />
    <Link to="/blog">Blog.</Link>
    <br />
    <Link to="/about">About me.</Link>
    <br />
    <Link to="/portfolio">Portfolio.</Link>
    <br />
    <Link to="/contact">Contact.</Link>
    <br />
  </Layout>
);

export default Page;
