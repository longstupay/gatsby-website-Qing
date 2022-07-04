import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.huangqing.site`,
    title:`第二次运行`,
    name:"test something"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:'blog',
        path:`${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",

  ],
}

export default config
