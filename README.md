# gatsby-starter-resume

Online version of my CV, built with Gatsby & :heart:. Based on the Gatsby starter [`gatsby-starter-resume`](https://www.gatsbyjs.org/starters/anubhavsrivastava/gatsby-starter-resume/).

## Install

Make sure that you have the Gatsby CLI installed:

```sh
npm install --global gatsby-cli
```

Use the usual Gatsby commands to build and run.

Serve a development version with hot reloading:

```sh
gatsby develop
```

Build:

```sh
gatsby build
```

Serve the production build:

```sh
gatsby develop
```

## Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.
