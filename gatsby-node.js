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

  // Define a template for noticia post
  const articlePost = path.resolve(
    './src/templates/noticias/noticia.template.js',
  )

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

    //Create noticas pages
    const postPerPage = 16
    const numPages = Math.ceil(articles.length / postPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/noticias` : `/noticias/ultimas/${i + 1}`,
        component: path.resolve(
          './src/templates/noticias/noticias.template.js',
        ),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
        },
      })
    })
  }
}
