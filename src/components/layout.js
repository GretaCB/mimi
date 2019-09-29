/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
`

const NetlifyLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
`

const SeanLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer> 
            © {new Date().getFullYear()}, Built with
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink> and
            <NetlifyLink href="https://www.netlify.com/">Netlify</NetlifyLink>.
            Photo by <SeanLink href="https://www.instagram.com/sirbruceleroy/">Sean Hopkins</SeanLink>.
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
