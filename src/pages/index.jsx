import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Home({ data }) {
  return (
    <Layout>
      <>
        <div className='w-full p-4'>
          <h1>空域设计</h1>
          <h4>{data.allMarkdownRemark.totalCount} 篇文章</h4>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className='relative px-4 my-4 md:w-1/2 lg:w-1/3'>
            <Link
              to={`blog${node.fields.slug}`}
              className='block h-full p-8 shadow-lg hover:shadow-xl bg-white'
            >
              <h2 className='text-lg mb-2'>{node.frontmatter.title}</h2>
              <p className='mb-12'>{node.excerpt}</p>
              <time className='absolute bottom-8 left-12 font-mono text-base text-gray-400 mt-6'>
                {node.frontmatter.date}
              </time>
            </Link>
          </div>
        ))}
      </>
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
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`
