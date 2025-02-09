'use client';
import { useState, useEffect } from 'react';

import client from '../../sanity';
import { FaCheckCircle } from 'react-icons/fa';

export default function UserJoinPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [notificationsAllowed, setNotificationsAllowed] = useState(false);

  // Ask for notification permission
  useEffect(() => {
    if (success && 'Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          setNotificationsAllowed(true);
        }
      });
    }
  }, [success]);

  const handleJoinNow = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Check if user already exists
      const existingUser = await client.fetch(
        `*[_type == "user" && username == $username][0]`,
        { username }
      );

      if (existingUser) {
        setError('User already exists. Please login instead.');
        return;
      }

      // Create new user in Sanity
      await client.create({
        _type: 'user',
        username,
        password, // In production, password should be hashed
        joinedAt: new Date().toISOString(),
      });

      // Notify user of sales events
      if (notificationsAllowed) {
        new Notification('Welcome to FurniFlex!', {
          body: 'Stay tuned for our upcoming sales events!',
        });
      }

      // Reset form and show success
      setUsername('');
      setPassword('');
      setError('');
      setSuccess(true);
    } catch (err) {
      setError('Error joining. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Join Now</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && (
        <div className="flex items-center text-green-500 mb-4">
          <FaCheckCircle className="mr-2" />
          <p>Successfully joined!</p>
        </div>
      )}
      <form onSubmit={handleJoinNow}>
        <div className="mb-6"> {/* Adjusted margin for more space */}
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6"> {/* Adjusted margin for more space */}
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6 flex items-center"> {/* Added notification checkbox */}
          <input
            type="checkbox"
            checked={notificationsAllowed}
            onChange={() => setNotificationsAllowed(!notificationsAllowed)}
            className="mr-2"
          />
          <label>Allow notifications for sales events</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
        >
          Join Now {success && <FaCheckCircle className="ml-2" />}
        </button>
      </form>
    </div>
  );
}
