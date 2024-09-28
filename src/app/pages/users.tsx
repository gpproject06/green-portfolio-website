import { GetServerSideProps } from 'next';
import pool from '../lib/db'; // Adjust the import path based on your folder structure

type User = {
  id: number;
  name: string;
  position: string;
};

type UsersPageProps = {
  users: User[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await pool.query<User>('SELECT * FROM users');
    const users = result.rows;
    return { props: { users } };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { props: { users: [] } }; // Return empty array on error
  }
};

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
