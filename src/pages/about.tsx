import { Link } from 'gatsby';
import type { FC } from 'react';
import React from 'react';

const Page: FC = () => (
  <div>
    <h1>About</h1>
    <p>GatsbyJSでできたブログ</p>
    <Link to='/'>home</Link>
  </div>
);
export default Page;
