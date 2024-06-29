import React from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebaseConfig';
import { ref, push } from 'firebase/database';
import QuoteForm from '../components/QuoteForm';
import '../styles/AddQuote.css';

const AddQuote: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (author: string, category: string, text: string) => {
    const quotesRef = ref(database, 'quotes');
    push(quotesRef, {
      author,
      category,
      text
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Добавить цитату</h1>
      <QuoteForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddQuote;

