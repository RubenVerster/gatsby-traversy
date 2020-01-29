import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const fetchPosts = graphql`
  query fetchBlogs {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
          }
          excerpt
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export default Blog
