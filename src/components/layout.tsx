import { graphql, Link, useStaticQuery } from "gatsby";
import React, { FC, ReactNode } from "react";

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
            <header className=" ml-2 text-gray-300">{data.site.siteMetadata.title}</header>
            <nav>
                <ul className="underline flex list-none">
                    <li className="pl-8"><Link to="/">Home</Link></li>
                    <li className="pl-8"><Link to="/about">About</Link></li>
                    <li className="pl-8">
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="">
                <h1 className="text-purple-700">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout