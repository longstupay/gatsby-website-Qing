import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Layout from "../components/layout";

interface IPops {
    data: any
}
type mapChild = {
    id: any,
    name: string
}

const Blog: FC<IPops> = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node: any) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
            <StaticImage className="h-80 w-80" src="../images/woman.jpg" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" />
        </Layout>
    )
}

// export const query = graphql`
//     query {
//         allFile {
//             nodes {
//                 name,
//                 id
//             }
//         }
//     }
// `
export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              id
              frontmatter {
                title
                date(formatString: "MMMM D YYYY")
              }
              slug
            }
          }
    }
`

export default Blog