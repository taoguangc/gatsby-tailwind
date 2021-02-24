import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges
  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  return (
    <Layout>
      <SEO />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const { slug } = node.fields
        return (
          <div key={slug} className='relative px-4 my-4 md:w-1/2 lg:w-1/3'>
            <Link
              to={'/blog' + slug}
              className='block h-full p-8 shadow-lg hover:shadow-xl bg-white'
            >
              <h2 className='text-lg mb-12'>{title}</h2>
              <time className='absolute bottom-8 left-12 font-mono text-base text-gray-400 mt-6'>
                {node.frontmatter.date}
              </time>
            </Link>
          </div>
        )
      })}
      <ul className='my-12 px-4 w-full inline-flex -space-x-px'>
        {!isFirst ? (
          <li>
            <Link
              className='inline-flex p-2 rounded-l-md border border-gray-300 hover:bg-gray-50'
              to={`/blog${prevPage}`}
              rel='prev'
            >
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </li>
        ) : (
          <li className='inline-flex p-2 rounded-l-md border border-gray-300 hover:bg-gray-50 bg-gray-100 text-gray-400'>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </li>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link
              className='inline-flex text-sm px-4 py-2 border border-gray-300 hover:bg-gray-50'
              activeClassName='bg-indigo-50 text-indigo-700 font-semibold'
              to={`/blog/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}

        {!isLast ? (
          <li>
            <Link
              className='inline-flex p-2 rounded-r-md border border-gray-300 hover:bg-gray-50'
              to={`/blog${nextPage}`}
              rel='next'
            >
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </li>
        ) : (
          <li className='inline-flex p-2 rounded-r-md border border-gray-300 hover:bg-gray-50 bg-gray-100 text-gray-400'>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
