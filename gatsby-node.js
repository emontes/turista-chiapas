const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allStrapiNoticia(
          filter: { estado: { slug: { eq: "chiapas" } } }
          sort: { fields: date, order: ASC }
        ) {
          nodes {
            id
            title
            slug
            dateslug: date(formatString: "yy/M/D")
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi Noticias`,
      result.errors,
    )

    return
  }

  // Define a template for article post
  const articlePost = path.resolve('./src/templates/article.js')

  const articles = result.data.allStrapiNoticia.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/${article.dateslug}/${article.slug}`,
        component: articlePost,
        context: {
          id: article.id,
        },
      })
    })
  }
}
