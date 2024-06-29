import React, { useState } from 'react';
import '../styles/QuoteForm.css';

interface QuoteFormProps {
  onSubmit: (author: string, category: string, text: string) => void;
  initialData?: { author: string; category: string; text: string };
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit, initialData }) => {
  const [author, setAuthor] = useState(initialData?.author || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [text, setText] = useState(initialData?.text || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(author, category, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Автор</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Категория</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Текст</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default QuoteForm;

