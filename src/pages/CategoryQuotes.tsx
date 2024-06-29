import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebaseConfig';
import { ref, query, orderByChild, equalTo, onValue } from 'firebase/database';
import QuoteList from '../components/QuoteList';
import '../styles/CategoryQuotes.css';

const CategoryQuotes: React.FC = () => {
  const { id } = useParams();
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const quotesRef = query(ref(database, 'quotes'), orderByChild('category'), equalTo(id));
      onValue(quotesRef, (snapshot) => {
        const data = snapshot.val();
        const quotesList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setQuotes(quotesList);
      });
    }
  }, [id]);

  return (
    <div>
      <h1>Цитаты категории {id}</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default CategoryQuotes;


