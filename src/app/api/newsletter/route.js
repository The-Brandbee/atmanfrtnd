export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ message: 'Invalid email address' }), {
        status: 400,
      });
    }

    // Log or save the email (you can integrate DB or Mailchimp here)
    console.log('New subscriber:', email);

    return new Response(JSON.stringify({ message: 'Thanks for subscribing!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
}
