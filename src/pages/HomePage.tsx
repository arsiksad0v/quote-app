import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import QuoteList from '../components/QuoteList';
import CategoryMenu from '../components/CategoryMenu';

interface Quote {
  id: string;
  author: string;
  text: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const quotesRef = ref(database, 'quotes');
    onValue(quotesRef, (snapshot) => {
      const quotesData = snapshot.val();
      const quotesList = [];
      for (let id in quotesData) {
        quotesList.push({ id, ...quotesData[id] });
      }
      setQuotes(quotesList);
    });
  }, []);

  return (
    <div>
      <CategoryMenu />
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default HomePage;
