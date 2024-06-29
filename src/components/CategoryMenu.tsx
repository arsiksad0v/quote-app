import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Star Wars', id: 'star-wars' },
  { title: 'Famous People', id: 'famous-people' },
  { title: 'Saying', id: 'saying' },
  { title: 'Humour', id: 'humour' },
  { title: 'Motivational', id: 'motivational' },
];

const CategoryMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryMenu;
