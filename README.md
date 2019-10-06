# Carol's About Me Static Site

[![Build Status](https://travis-ci.org/GretaCB/mimi.svg?branch=master)](https://travis-ci.org/GretaCB/mimi)  [![Netlify Status](https://api.netlify.com/api/v1/badges/77690401-311c-4edb-9456-11bb303cb1e1/deploy-status)](https://app.netlify.com/sites/infallible-raman-086a5c/deploys)

### [www.carolbhansen.com](https://carolbhansen.com/)

Built on React, GatsbyJS, and Netlify. Made possible by the [gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) template, specifically a [Julia](https://github.com/niklasmtj/gatsby-starter-julia) remix.


# :woman_shrugging: So Carol doesn't forget

### Install

```
yarn install
```


### Run

```
gatsby develop
```

Site will be running at `http://localhost:8000`

Will also run the graphql query interface at `http://localhost:8000/___graphql`


### Test

```
npm test
```

Uses [`jest`](https://jestjs.io/) for [snapshot](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest) testing of React components.

These snapshots will need to be updated for certain component changes. If snapshot changes are expected:

```
./node_modules/jest/bin/jest.js --updateSnapshot
```
