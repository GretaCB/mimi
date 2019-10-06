import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import BioImage from "../images/carol_bio.jpg"
const gemoji = require('gemoji')
const robot = gemoji.name.robot.emoji;
const raised_hand = gemoji.name.raised_hand.emoji;
const guitar = gemoji.name.guitar.emoji;
const bike = gemoji.name.bike.emoji;
const fried_egg = gemoji.name.fried_egg.emoji;

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
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
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
                <img
                alt="mi"
                src={BioImage}
                class="img-bio"
                width="300"
                height="200"
              /> 
            <Description>
              <p>Carol is a human person {raised_hand}</p>

              <p>She is also a <b>backend software engineer</b> with 7+ years of experience and a strong focus on knowledge sharing and best practices.</p>
              
              <p>Carol currently works "closer to the metal" at <a href="https://www.sram.com/en/sram">SRAM LLC</a> helping to build the future of electronic 
              bike components. She strengthens the continuous integration (CI) pipeline and firmware test infrastructure for embedded systems and 
              enjoys finding solutions to team pain points.</p>
              
              <p>Previously, Carol was an engineer at <a href="https://www.mapbox.com/">Mapbox</a> helping to make maps faster and friendlier while contributing
              to overall culture as the company grew. Ironically, she rarely saw a map during her day-to-day. She worked on projects ranging from 
              cloud-based data processing pipelines, C++/Node.js performance analysis, API development, to dev tooling and builds distribution.</p>
              
              <p>Carol is allergic to <a href="https://modelviewculture.com/news/the-eternal-and-toxic-optimism-of-startup-advice">harmful tech industry rhetoric</a>. 
              Carol strives to think beyond duality and to reimagine everyday systems from a care-focused lens. She's hungry for broader context and a longterm 
              vision that values inclusion, transparency and humanity.</p>

              <p>Outside of work, Carol enjoys playing guitar {guitar}, biking {bike} and food adventures {fried_egg}. Originally from Chicago, 
              she relies on large bodies of water to orient her, and feels fortunate to be exposed to Chicago's deep roots of community justice organizing, music, 
              and an overflowing love for summer.</p> 
              
              <p>bloop bloop beep boop bleep {robot}</p>
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
