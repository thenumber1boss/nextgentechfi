import React, { useState } from 'react';
import config from '../../config';
import './insert-affiliates.css';

const InsertAffiliates = () => {
  const [names, setNames] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${config.API_BASE_URL}/api/insert-affiliates`, { // Use your server's API route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ names: names.split(',').map(name => name.trim()) }),
    });

    const result = await response.json();
    if (response.ok) {
      setMessage(result.message.join('\n')); // Display success messages
    } else {
      setMessage('Error adding schools');
    }
  };

  return (
    <div className="affiliates-container">
      <h1>Register Affiliates</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="Enter affiliate names, comma-separated"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <pre>{message}</pre>}
    </div>
  );
};

export default InsertAffiliates;
