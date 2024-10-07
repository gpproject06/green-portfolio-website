//import config
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../src/app/lib/db';  
import mailgun from 'mailgun-js';


const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY as string, 
  domain: process.env.MAILGUN_DOMAIN as string, 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { clientName, clientEmail } = req.body;

    if (!clientName || !clientEmail) {
      return res.status(400).json({ success: false, msg: 'Name and email are required.' });
    }

    try {
      // Insert the data into the database
      const query = 'INSERT INTO clients (name, email) VALUES ($1, $2)';
      const values = [clientName, clientEmail];

      await pool.query(query, values);

      // Send an email via Mailgun
      const emailData = {
        from: 'Green Portfolio Project <no-reply@sandboxee45f6330e484abf9b773da9ce08cbbb.mailgun.org>',
        to: clientEmail, // Send the email to the client
        subject: 'New Client Signup!',
        text: `Great News!,\n\n${clientName} is interested in the Green Portfolio Project! You can contact them at ${clientEmail}.`,
      };

      await mg.messages().send(emailData);

      return res.status(200).json({ success: true, msg: 'Data inserted and email sent successfully' });
    } catch (error) {
      console.error('Error:', error);  // Better error logs
      return res.status(500).json({ success: false, msg: 'An error occurred while processing your request' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, msg: `Method ${req.method} not allowed.` });
  }
}

