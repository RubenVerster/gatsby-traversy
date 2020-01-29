const path = require("path")
//gatsby uses Redux in the background
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blogPost.js")
  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
