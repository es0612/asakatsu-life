import type { FC } from 'react';
import React from 'react';
import { Link } from 'gatsby';

const Page: FC = () => (
  <div>
    <h1>Home</h1>
    <p>Hello, world!</p>
    <Link to="/about">about</Link>
  </div>
);
export default Page;