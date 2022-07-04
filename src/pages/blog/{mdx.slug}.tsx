import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// d0ddec36-6453-5784-9b61-234a03cb96f6
interface IPops {
  data: any
}
const BlogPost: React.FC<IPops> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image!}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
       <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost