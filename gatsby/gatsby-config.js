/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `sanity-web`,
    siteUrl: `http://localhost:8000/`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "n0bkcfzt",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};