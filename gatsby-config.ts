import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Asakatsu Blog',
    author: 'Shinya Ema',
    description: 'new blog using GatsbyJS',
    email: 'emashinya0612@gmail.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: resolve(__dirname, 'articles')
      }
    },
    'gatsby-transformer-remark'
  ]
};

export default config;
