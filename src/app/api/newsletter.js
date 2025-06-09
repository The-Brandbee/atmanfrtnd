export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Example: Log or save email
  console.log('New subscriber:', email);

  // Optional: Send to a database or Mailchimp

  return res.status(200).json({ message: 'Thanks for subscribing!' });
}
