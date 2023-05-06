import React from "react";
import styled from "styled-components";
import big from "../assets/images/big.jpg";
import { StaticImage } from "gatsby-plugin-image";
const images = () => {
  return (
    <Wrappter>
      <StaticImage src="../assets/images/big.jpg" alt="food" />
      <h2>gatsby images</h2>
    </Wrappter>
  );
};

const Wrappter = styled.section`
  img {
    width: 200px;
  }
`;
export default images;
