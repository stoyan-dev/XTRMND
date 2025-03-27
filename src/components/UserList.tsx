import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-blue-500 font-semibold">Loading users...</p>;
  if (error) return <p className="text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="grid gap-4">
      {users.map(user => (
        <div key={user.id} className="p-4 border rounded-lg shadow bg-white hover:shadow-md transition">
          <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};
