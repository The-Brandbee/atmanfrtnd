import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', phone: '',  location: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6  rounded-lg shadow contact-us-frm">
      <div className='row'>
        <div className='col-md-6'>
 <div>
        <label className="block mb-1 font-semibold">Name*</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
        </div>
         <div className='col-md-6'>
            <div>
        <label className="block mb-1 font-semibold">Email*</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
        </div>
         <div className='col-md-6'>
             <div>
        <label className="block mb-1 font-semibold">Mobile Phone Number*</label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
        </div>
         <div className='col-md-6'>
             <div>
        <label className="block mb-1 font-semibold">Location*</label>
        <input
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
        </div>
         <div className='col-md-12'>
               <div>
        <label className="block mb-1 font-semibold">Message*</label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
        </div>
      </div>
     
      
       
     
   
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Send
      </button>

      {status === 'loading' && <p className="text-gray-500">Sending...</p>}
      {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
