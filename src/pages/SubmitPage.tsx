import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const SubmitPage: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quote = {
      author,
      text,
      category
    };
    push(ref(database, 'quotes'), quote);
    setAuthor('');
    setText('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Quote text" required></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="star-wars">Star Wars</option>
        <option value="famous-people">Famous People</option>
        <option value="saying">Saying</option>
        <option value="humour">Humour</option>
        <option value="motivational">Motivational</option>
      </select>
      <button type="submit">Add Quote</button>
    </form>
  );
}

export default SubmitPage;
