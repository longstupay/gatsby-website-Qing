import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import BlogItem from "../components/BlogItem";
import BlogList from "../components/BlogList";
import BlogNews from "../components/BlogNews";
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
            <BlogList>
                <BlogItem>
                    {
                        data.allMdx.nodes.map((node: any) => {
                            // <article key={node.id}>
                            //     <h2>
                            //         <Link to={`/blog/${node.slug}`}>
                            //             {node.frontmatter.title}
                            //         </Link>
                            //     </h2>
                            //     <p>Posted: {node.frontmatter.date}</p>
                            // </article>
                            const image = getImage(node.frontmatter.hero_image)
                            return (
                               
                                    <div key={node.id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                                        <Link to={`/blog/${node.slug}`} className="w-full block h-full">
                                            <GatsbyImage image={image!} alt="blog pic" className="max-h-40 w-full object-cover" />
                                        </Link>
                                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                                            <Link to={`/blog/${node.slug}`} className="w-full block h-full">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                                    {node.frontmatter.title}
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    {node.frontmatter.resume}
                                                </p>
                                            </Link>
                                            <div className="flex items-center mt-4">
                                                <div className="relative">
                                                    <StaticImage src="../images/avatar.jpg" alt="头像" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 text-sm">
                                                    <p className="text-gray-800 dark:text-white">
                                                        Huang Qing
                                                    </p>
                                                    <p className="text-gray-400 dark:text-gray-300">
                                                        {node.frontmatter.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                            )

                        })
                    }
                </BlogItem>
            </BlogList>
            <BlogNews />
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
                    date(formatString: "MMMM D YYYY")
                    hero_image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    title
                    resume
                }
                slug
            }
        }
    }
`

export default Blog