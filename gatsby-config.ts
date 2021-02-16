import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Asakatsu Blog',
    author: 'Shinya Ema',
    description: 'new blog using GatsbyJS',
    email: 'emashinya0612@gmail.com'
  },
  plugins: ['gatsby-plugin-sass']
};

export default config;
