import React from 'react'
import { Link } from 'gatsby'
import Title from './Title'

const ListItems = ({ title, items, linkTo }) => {
  return (
    <div>
      <Title title={title} />
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={`/${linkTo}/${item.slug}`}
                className="category-menu"
                activeStyle={{ color: 'var(--clr-red-dark)' }}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListItems
