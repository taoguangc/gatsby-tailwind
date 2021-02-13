import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.allMarkdownRemark.totalCount} 篇文章</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="p-6 border rounded-md">
            <Link to={node.fields.slug}>
              <h1 className="text-3xl mb-2">{node.frontmatter.title}</h1>
              <h3>
                <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
