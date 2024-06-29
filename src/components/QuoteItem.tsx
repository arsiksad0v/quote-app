import React from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebaseConfig';
import { ref, remove } from 'firebase/database';
import '../styles/QuoteItem.css';

interface QuoteItemProps {
  quote: { id: string; author: string; category: string; text: string };
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const quoteRef = ref(database, `quotes/${quote.id}`);
    remove(quoteRef);
  };

  const handleEdit = () => {
    navigate(`/edit/${quote.id}`);
  };

  return (
    <li>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      <p>{quote.category}</p>
      <button onClick={handleEdit}>Редактировать</button>
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
}

export default QuoteItem;

