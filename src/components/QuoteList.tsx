import React from 'react';
import QuoteItem from './QuoteItem';

interface QuoteListProps {
  quotes: { id: string; author: string; category: string; text: string }[];
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  return (
    <ul>
      {quotes.map(quote => (
        <QuoteItem key={quote.id} quote={quote} />
      ))}
    </ul>
  );
}

export default QuoteList;
