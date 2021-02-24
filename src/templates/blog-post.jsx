import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogPost({ data, pageContext }) {
  const { frontmatter, html } = data.markdownRemark
  const { prev, next } = pageContext
  console.log()

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article className='markdown'>
        <h1>{frontmatter.title}</h1>
        <time className='block mb-8 text-gray-400'>{frontmatter.date}</time>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        {prev === false ? null : (
          <>
            {prev && (
              <Link to={`/blog${prev.fields.slug}`}>
                <p>{'<' + prev.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={`/blog${next.fields.slug}`}>
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
