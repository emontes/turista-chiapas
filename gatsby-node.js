const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /* ---------------------------------------
     ------------ Noticias  --------------
     --------------------------------------*/
  const postPerPage = 16

  //Crea las páginas de los Temas
  console.log('Creando páginas de Temas de Noticias')
  const resultTopics = await graphql(`
    {
      allStrapiNoticia(filter: { estado: { Name: { eq: "Chiapas" } } }) {
        distinct(field: topics___slug)
      }
    }
  `)

  const topics = resultTopics.data.allStrapiNoticia.distinct

  // Obtiene los datos de los topics (Nombre, url, imagen)

  let topicsFull = []
  topics.map(async (item) => {
    console.log('Obteniendo datos de tema: ', item)
    const result = await graphql(`{
      strapiTopic(slug: {eq: "${item}"}) {
        Title
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    `)
    topicsFull.push(result.data.strapiTopic)
  })

  topics.map(async (item) => {
    const resultTopic = await graphql(`
     {
      allStrapiNoticia(
        limit: ${postPerPage}
        filter: {
          estado: { slug: { eq: "chiapas" } }
          topics: { elemMatch: { slug: { eq: "${item}" } } }
        }
    ) {
    pageInfo {
          pageCount
        }
    }
    }`)
    const topicPages = resultTopic.data.allStrapiNoticia.pageInfo.pageCount
    console.log('Topic (item) ===> ', item)
    console.log('Cuantos paginos:', topicPages)

    for (var i = 0; i < topicPages; i++) {
      createPage({
        path:
          i === 0
            ? `/noticias/tema/${item}`
            : `/noticias/tema/${item}/${i + 1}`,

        component: path.resolve('./src/templates/noticias/topic-template.js'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          slug: item,
          topics: topicsFull,
        },
      })
    }
  })

  //Crea páginas de cada noticia
  console.log('Creando páginas para cada noticia')
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
    './src/templates/noticias/noticia-template.js',
  )

  const articles = result.data.allStrapiNoticia.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      console.log('Creando', article.slug)
      createPage({
        path: `/${article.dateslug}/${article.slug}`,
        component: articlePost,
        context: {
          id: article.id,
          topics: topicsFull,
        },
      })
    })

    //Create noticas pages

    const numPages = Math.ceil(articles.length / postPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/noticias` : `/noticias/ultimas/${i + 1}`,
        component: path.resolve(
          './src/templates/noticias/noticias-template.js',
        ),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          topics: topicsFull,
        },
      })
    })
  }
}
