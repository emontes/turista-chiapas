import React from 'react'
import { Link } from 'gatsby'

const BreadLink = ({ category }) => {
  return (
    <>
      <Link to={`/${category.slug}`}>{category.title}</Link>
      {' > '}
    </>
  )
}

const Breadcrumbs = ({ category }) => {
  return (
    <div className="breadcrumb">
      <Link to="/links.html">Directorio</Link>
      {' > '}

      {category.link_categories.length > 0 && (
        <>
          {category.link_categories[0].link_categories.length > 0 && (
            <>
              {category.link_categories[0].link_categories[0].link_categories
                .length > 0 && (
                <>
                  {category.link_categories[0].link_categories[0]
                    .link_categories[0].link_categories.length > 0 && (
                    <BreadLink
                      category={
                        category.link_categories[0].link_categories[0]
                          .link_categories[0].link_categories[0]
                      }
                    />
                  )}
                  <BreadLink
                    category={
                      category.link_categories[0].link_categories[0]
                        .link_categories[0]
                    }
                  />
                </>
              )}
              <BreadLink
                category={category.link_categories[0].link_categories[0]}
              />
            </>
          )}
          <BreadLink category={category.link_categories[0]} />
        </>
      )}
      {category.title}
    </div>
  )
}

export default Breadcrumbs
