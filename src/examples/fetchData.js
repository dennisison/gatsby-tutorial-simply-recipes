import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      {/*<h2>Name : {data.site.siteMetadata.person.name}</h2>*/}
      <h2>site title is : {title}</h2>
    </div>
  );
};

export default FetchData;
