module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Sameeksha",
  },
  plugins: [
    'gatsby-plugin-image',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'pa57wlth',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true
      }
    },
  ],
};
