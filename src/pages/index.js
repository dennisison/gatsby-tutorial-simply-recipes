import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="company/history">history</Link>
      </div>
      <a href="/about">reg link</a>
      <br></br>
      <a href="https://www.gatsbyjs.com/docs/how-to/">Gatsby Docs</a>
    </Layout>
  );
}
