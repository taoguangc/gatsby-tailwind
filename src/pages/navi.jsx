import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class TestNavigation extends React.Component {
  render() {
    const { data } = this.props
    const listofFolders = data.allDirectory.edges

    return (
      <Layout
        location={this.props.location}
        title={'testing folder navigation'}
      >
        <div>
          <div>
            {listofFolders.map(({ node }) =>
              node.relativeDirectory === '' ? (
                <div>
                  <p>{node.relativePath}</p> <p>is a root folder</p>
                </div>
              ) : (
                <div>
                  Folder: {node.base} is a child of {node.relativeDirectory}
                </div>
              )
            )}
          </div>
          <div>
            <h3>this is the direct output of the query </h3>
            <pre>{JSON.stringify(listofFolders, null, 2)}</pre>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TestNavigation

export const pageQuery = graphql`
  query {
    allDirectory(filter: { sourceInstanceName: { ne: "assets" } }) {
      edges {
        node {
          relativeDirectory
          relativePath
          base
        }
      }
    }
  }
`
