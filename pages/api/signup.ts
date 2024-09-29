// /pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../src/app/lib/db';  // Adjust the path to your database configuration

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { clientName, clientEmail } = req.body;

    if (!clientName || !clientEmail) {
      return res.status(400).json({ success: false, msg: 'Name and email are required.' });
    }

    try {
      const query = 'INSERT INTO clients (name, email) VALUES ($1, $2)';
      const values = [clientName, clientEmail];

      await pool.query(query, values);

      return res.status(200).json({ success: true, msg: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error inserting data:', error);  // Add this for better error logs
      return res.status(500).json({ success: false, msg: 'Database error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, msg: `Method ${req.method} not allowed.` });
  }
}

