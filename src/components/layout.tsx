import { graphql, Link, useStaticQuery } from "gatsby";
import React, { FC, ReactNode } from "react";
import BlogFoot from "./BlogFooter";
import BlogList from "./BlogList";
import BlogNav from "./BlogNav";

interface IProps {
    pageTitle: string;
    children: ReactNode;
}

const Layout: FC<IProps> = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    console.log(data)
    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <BlogNav />
            <main className="mt-16">
                {children}
            </main>
            <BlogFoot />
        </div>
    )
}

export default Layout