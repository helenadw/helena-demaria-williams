import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPreviewGrid from "../components/blog-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query blogPageQuery {
    blog: allSanityBlog(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const BlogPage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const blogNodes =
    data && data.blog && mapEdgesToNodes(data.blog).filter(filterOutDocsWithoutSlugs);
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {blogNodes && blogNodes.length > 0 && <BlogPreviewGrid nodes={blogNodes} />}
      </Container>
    </Layout>
  );
};

export default BlogPage;
