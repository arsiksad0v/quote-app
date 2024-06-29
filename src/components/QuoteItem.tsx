import React from 'react';
import { Link } from 'react-router-dom';
import { database } from '../firebase';
import { ref, remove } from 'firebase/database';

interface Quote {
  id: string;
  author: string;
  text: string;
  category: string;
}

interface QuoteItemProps {
  quote: Quote;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const deleteQuote = () => {
    remove(ref(database, `quotes/${quote.id}`));
  };

  return (
    <div>
      <p>{quote.text}</p>
      <p><strong>- {quote.author}</strong></p>
      <Link to={`/edit/${quote.id}`}>Edit</Link>
      <button onClick={deleteQuote}>Delete</button>
    </div>
  );
}

export default QuoteItem;
