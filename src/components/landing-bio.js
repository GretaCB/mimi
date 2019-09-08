import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Description = styled.div`
  text-align: left;
`

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Title = styled.p`
  padding: 0;
  margin-bottom: 3.5rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Title>Backend Software Engineer</Title>
            <Description>
              <p>Carol is a Chicago-based engineer with 7+ years of experience and a strong focus on knowledge sharing and lifelong learning. She works at SRAM strengthening the continuous integration (CI) pipeline and test infrastructure for embedded systems and is excited to be working "closer to the metal".</p>
              <p>Previously, Carol was an engineer at Mapbox working on projects ranging from cloud-based data processing pipelines, C++/Node.js performance analysis, API development, to tooling and builds distribution.</p>
              <p>Outside of work, Carol enjoys playing guitar, biking and food adventures. She strives to think beyond duality and to reimagine everyday systems from a care-focused lens.</p>
            </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
