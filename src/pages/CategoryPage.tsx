import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebase';
import { ref, orderByChild, equalTo, query, onValue } from 'firebase/database';
import QuoteList from '../components/QuoteList';

interface Quote {
  id: string;
  author: string;
  text: string;
  category: string;
}

interface CategoryParams {
  id: string;
}

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    if (id) {
      const quotesRef = query(ref(database, 'quotes'), orderByChild('category'), equalTo(id));
      onValue(quotesRef, (snapshot) => {
        const quotesData = snapshot.val();
        const quotesList: Quote[] = [];
        for (let quoteId in quotesData) {
          quotesList.push({ id: quoteId, ...quotesData[quoteId] });
        }
        setQuotes(quotesList);
      });
    }
  }, [id]);

  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default CategoryPage;
