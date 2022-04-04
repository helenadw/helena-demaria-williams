import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Blog from "../components/blog";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BlogTemplateQuery($id: String!) {
    blog: sanityBlog(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

const BlogTemplate = props => {
  const { data, errors } = props;
  const blog = data && data.blog;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {blog && <SEO title={blog.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {blog && <Blog {...blog} />}
    </Layout>
  );
};

export default BlogTemplate;
