/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "株式会社あんしんセキュリティー公式サイト",
    titleTemplate: "%s · The Real Hero",
    description:
      "岐阜県岐阜市の警備会社　あんしんセキュリティーの公式ホームページです。当社は交通誘導やイベントなどの警備業務を主軸として行っています。",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/favicon.ico", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
     },
    }
  ]
}