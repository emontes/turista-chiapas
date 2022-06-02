const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postPerPage = 16

  /* ---------------------------------
     ------------ Hoteles --------------
     --------------------------------*/
  const resultDestinos = await graphql(`
    {
      locations: allStrapiHotelLocation(
        filter: { location: { estado: { Name: { eq: "Chiapas" } } } }
      ) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const destinos = resultDestinos.data.locations.nodes

  destinos.map(async (item) => {
    createPage({
      path: `/${item.slug}`,
      component: path.resolve('./src/templates/hoteles/locations-template.js'),
      context: {
        id: item.id,
        slug: item.slug,
      },
    })
  })

  /* ---------------------------------
     ------------ Links --------------
     --------------------------------*/
  const resultLinks = await graphql(`
    {
      categories: allStrapiLinkCategory(
        filter: { slug: { regex: "/.*link-chis.*/" } }
      ) {
        nodes {
          id
          title
          slug
          link_categories {
            strapi_id
            slug
          }
        }
      }
    }
  `)

  const links = resultLinks.data.categories.nodes

  let linksRoot = []
  //Crea las páginas de las Links
  links.map(async (item) => {
    let slug = item.slug
    // Esto para los links de provincia (por ejemplo chiapas, se les pone old slug y el slug como link-chis-1)

    console.log('Creando página de Links: ', slug)
    createPage({
      path: `/${slug}`,
      component: path.resolve('./src/templates/links/links-template.js'),
      context: {
        id: item.id,
        slug: item.slug,
      },
    })

    //Este if es para cuando se trata de México Global
    //if (item.link_categories.length === 0) linksRoot.push(item)
    if (item.link_categories[0].slug === 'link-40.html') linksRoot.push(item)
  })

  //Crea página del Index de Directorio (links)
  createPage({
    path: `/links.html`,
    component: path.resolve('./src/templates/links/index-template.js'),
    context: {
      linksRoot: linksRoot,
    },
  })

  /* ---------------------------------------------------
     ------------ Información (Sections)  --------------
     ---------------------------------------------------*/
  // *** Create Sections Pages ***
  console.log('Creando páginas de Secciones de Información')
  const resultSections = await graphql(`
    {
      parents: allStrapiSectionArticle(
        filter: { estado: { Name: { eq: "Chiapas" } } }
      ) {
        distinct(field: sections___strapi_parent___slug)
      }
      allStrapiSectionArticle(filter: { estado: { Name: { eq: "Chiapas" } } }) {
        distinct(field: sections___slug)
      }
    }
  `)

  const sections = resultSections.data.parents.distinct
  const sections2 = resultSections.data.allStrapiSectionArticle.distinct

  sections2.map((item) => {
    if (!sections.includes(item)) sections.push(item)
  })

  // Obtiene datos de las Secciones
  let sectionsFull = []
  let sectionsMaster = []
  sections.map(async (item) => {
    console.log('Obteniendo datos de Section: ', item)
    const result = await graphql(`
      {
        strapiSection(
          
          slug: { eq: "${item}" }
        ) {
          title
          slug
          strapi_parent {
            slug
          }
        }
      }
    `)
    sectionsFull.push(result.data.strapiSection)
    if (!result.data.strapiSection.strapi_parent)
      sectionsMaster.push(result.data.strapiSection)
  })

  // ** Crea el index de información
  createPage({
    path: `/informacion`,
    component: path.resolve(`./src/templates/informacion/index-template.js`),
    context: {
      sections: sectionsFull,
      sectionsMaster: sectionsMaster,
    },
  })

  //Crea las páginas de Secciones
  sections.map(async (item) => {
    createPage({
      path: `/informacion/${item}`,
      component: path.resolve(
        './src/templates/informacion/section-template.js',
      ),
      context: {
        slug: item,
        sections: sections,
        sectionsMaster: sectionsMaster,
      },
    })
  })

  // ** Crea las páginas de Todos los Artículos en Secciones

  const resultSectionArticle = await graphql(
    `
      {
        strapiSection {
          title
          slug
        }
        allStrapiSectionArticle(
          filter: { estado: { slug: { eq: "chiapas" } } }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `,
  )

  const sectionArticles =
    resultSectionArticle.data.allStrapiSectionArticle.nodes
  console.log('Creando páginas individuales de Sections Articles.....')
  if (sectionArticles.length > 0) {
    sectionArticles.forEach((article) => {
      // console.log('Creando', article.slug)
      createPage({
        path: `/info/${article.slug}`,
        component: path.resolve(
          './src/templates/informacion/article-template.js',
        ),
        context: {
          id: article.id,
          slug: article.slug,
          sections: sectionsFull,
          sectionsMaster: sectionsMaster,
        },
      })
    })
  }

  /* ---------------------------------------
     ------------ Noticias  --------------
     --------------------------------------*/

  // *** Create Categories Pages ***
  console.log('Creando páginas de Categorías de noticias')
  const resultCategories = await graphql(`
    {
      allStrapiNoticia(filter: { estado: { Name: { eq: "Chiapas" } } }) {
        distinct(field: location___slug)
      }
    }
  `)

  const categories = resultCategories.data.allStrapiNoticia.distinct

  // Obtiene datos de Categorías
  let categoriesFull = []
  categories.map(async (item) => {
    console.log('Obteniendo datos de Categoria: ', item)
    const result = await graphql(`
      {
        strapiLocation(
          estado: { slug: { eq: "chiapas" } }
          slug: { eq: "${item}" }
        ) {
          name
          slug
        }
      }
    `)
    categoriesFull.push(result.data.strapiLocation)
  })

  categories.map(async (item) => {
    const result = await graphql(`
     {
      allStrapiNoticia(
        limit: ${postPerPage}
        filter: {
          estado: { slug: { eq: "chiapas" } }
          location: { slug: {eq: "${item}" } }
        }
    ) {
    pageInfo {
          pageCount
        }
    }
    }`)
    const topicPages = result.data.allStrapiNoticia.pageInfo.pageCount
    console.log('Category (item) ===> ', item)
    console.log('Cuantos paginos:', topicPages)

    for (var i = 0; i < topicPages; i++) {
      createPage({
        path: i === 0 ? `/noticias/${item}` : `/noticias/${item}/${i + 1}`,

        component: path.resolve(
          './src/templates/noticias/category-template.js',
        ),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          slug: item,
          topics: topicsFull,
          categories: categoriesFull,
        },
      })
    }
  })

  // *** Crea las páginas de los Temas ***
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
          categories: categoriesFull,
        },
      })
    }
  })

  // ** Crea páginas de cada noticia **

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
            slugOld
            dateslug: date(formatString: "yy/M")
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
  console.log('Creando páginas individuales de artículos.....')
  if (articles.length > 0) {
    articles.forEach((article) => {
      let path = `/${article.dateslug}/${article.slug}`

      if (article.slugOld) {
        path = article.slugOld
      }
      // console.log('Creando', path)
      createPage({
        path: path,
        component: articlePost,
        context: {
          id: article.id,
          slug: path,
          topics: topicsFull,
          categories: categoriesFull,
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
          categories: categoriesFull,
        },
      })
    })
  }
}
