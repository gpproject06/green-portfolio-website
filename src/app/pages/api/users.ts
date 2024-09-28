import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db'; // Adjust the import path based on your folder structure

type User = {
  id: number;
  name: string;
  position: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await pool.query<User>('SELECT * FROM users'); // Raw SQL command to fetch all users
    const users = result.rows;
    res.status(200).json({ users });
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
