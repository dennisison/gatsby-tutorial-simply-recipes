import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Images from "../examples/images";

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Images />
    </Layout>
  );
}
