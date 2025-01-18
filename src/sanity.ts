import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'qb6wry8z', // Replace with your project ID
  dataset: 'production', // Replace with your dataset
  apiVersion: '2025-01-09', // Use your API version
  useCdn: true, // Set to true for faster response (if data doesn't change frequently)
});

export default sanityClient;
