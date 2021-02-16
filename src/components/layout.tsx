import type { FC } from 'react';
import React from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
);
