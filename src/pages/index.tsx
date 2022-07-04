import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

export default ()=>{
  return (
    <Layout pageTitle="HomePage">
         <p>I'm making this by following the Gatsby Tutorial.</p>
         <StaticImage className="h-80 w-80" src="../images/woman.jpg" alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" />
    </Layout>
  )
}