import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default props => {
  const {
    filename,
    type = 'default',
    alt,
    sizes = '(max-width: 480px) 120px, (max-width: 960px) 240px, 480px'
  } = props

  const images = useStaticQuery(graphql`
    query ImageQuery {
      data: allFile {
        edges {
          node {
            relativePath
            default: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            square: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
            rectangle: childImageSharp {
              fluid(maxWidth: 480, maxHeight: 240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = images.data.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })

  if (!image) {
    return null
  }

  return (
    <Img
      alt={alt}
      fluid={{
        ...image.node[type].fluid,
        sizes: sizes
      }}
    />
  )
}
