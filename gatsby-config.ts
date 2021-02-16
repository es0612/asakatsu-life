import type { GatsbyConfig } from 'gatsby';

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
    }
  ]
};

export default config;
