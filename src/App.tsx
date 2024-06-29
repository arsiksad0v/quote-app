import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import CategoryQuotes from './pages/CategoryQuotes';
import AddQuote from './pages/AddQuote';
import EditQuote from './pages/EditQuote';
import './styles/App.css';

const categories = [
  { title: 'Звёздные войны', id: 'star-wars' },
  { title: 'Знаменитые люди', id: 'famous-people' },
  { title: 'Поговорки', id: 'saying' },
  { title: 'Юмор', id: 'humour' },
  { title: 'Мотивирующие', id: 'motivational' }
];

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Главная</NavLink>
        {categories.map(category => (
          <NavLink key={category.id} to={`/category/${category.id}`}>
            {category.title}
          </NavLink>
        ))}
        <NavLink to="/add">Добавить цитату</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryQuotes />} />
        <Route path="/add" element={<AddQuote />} />
        <Route path="/edit/:id" element={<EditQuote />} />
      </Routes>
    </Router>
  );
}

export default App;


