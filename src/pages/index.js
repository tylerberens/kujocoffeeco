import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#f1f1f1' }}>
          <Helmet title={siteTitle} />
          <div style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${author.node.image.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
              <div style={{position:'absolute', width:'100%', height:'100%', background:'#00000073'}}></div>
              <div style={{position:'absolute',top:'50%', left:'50%', transform:'translate(-50%, -50%)', textAlign:'center',fontSize:'2em', color:'#fff'}}>
                <h1 style={{fontWeight:'800', margin:'0'}}>Kujo Coffee Co.</h1>
                <p style={{margin:'0'}}>Coming Soon!</p>
              </div>
            </div>
          {/* <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1920, maxHeight: 1080, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            file{
              url
            }
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
