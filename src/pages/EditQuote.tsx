import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { database } from '../firebaseConfig';
import { ref, get, set } from 'firebase/database';
import QuoteForm from '../components/QuoteForm';
import '../styles/EditQuote.css';

const EditQuote: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const quoteRef = ref(database, `quotes/${id}`);
      get(quoteRef).then(snapshot => {
        if (snapshot.exists()) {
          setQuote(snapshot.val());
        }
      });
    }
  }, [id]);

  const handleSubmit = (author: string, category: string, text: string) => {
    if (id) {
      const quoteRef = ref(database, `quotes/${id}`);
      set(quoteRef, {
        author,
        category,
        text
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <div>
      <h1>Редактировать цитату</h1>
      {quote && <QuoteForm onSubmit={handleSubmit} initialData={quote} />}
    </div>
  );
}

export default EditQuote;
