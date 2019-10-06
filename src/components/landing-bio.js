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
              bike components. Previously, Carol was an engineer at <a href="https://www.mapbox.com/">Mapbox</a> helping to make maps faster and friendlier while contributing
              to overall company culture. Ironically, she rarely saw a map.</p>
              
              <p>Carol is allergic to <a href="https://modelviewculture.com/news/the-eternal-and-toxic-optimism-of-startup-advice">harmful tech industry rhetoric</a>. She's hungry for a longterm 
              vision that concretely values inclusion, transparency and humanity.</p>

              <p>More importantly, Carol enjoys playing guitar {guitar}, biking {bike}, and food adventures {fried_egg}. Originally from Chicago, 
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
