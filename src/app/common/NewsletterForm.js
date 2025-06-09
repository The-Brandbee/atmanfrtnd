'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/newsletter', { 
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className=" row">
      <div className="col-lg-9 col-md-9 col-sm-9 col-9">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="footer_input"
      />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
 <button type="submit" className="request_btn">
        Subscribe
      </button>
      </div>
     
      {message && <p className="mt-2 text-green-600 white">{message}</p>}
    </form>
  );
}
