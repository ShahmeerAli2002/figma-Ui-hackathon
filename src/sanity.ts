import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config();
const client = createClient({
  projectId: "qb6wry8z",
  dataset: "production",
  apiVersion: '2025-01-17',
  // token:"",
  useCdn: true,
});

export default client;