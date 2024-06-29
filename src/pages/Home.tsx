import React, { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import QuoteList from '../components/QuoteList';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    const quotesRef = ref(database, 'quotes');
    onValue(quotesRef, (snapshot) => {
      const data = snapshot.val();
      const quotesList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setQuotes(quotesList);
    });
  }, []);

  return (
    <div>
      <h1>Все цитаты</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default Home;
