import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function BlogPost({ data, pageContext }) {
  const { frontmatter, html } = data.markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout>
      <article className='markdown'>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {prev === false ? null : (
          <>
            {prev && (
              <Link to={prev.fields.slug}>
                <p>{'<' + prev.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title + '>'}</p>
              </Link>
            )}
          </>
        )}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
