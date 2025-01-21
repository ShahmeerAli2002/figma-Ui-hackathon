import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'qb6wry8z', // Replace with your project ID
  dataset: 'production', // Replace with your dataset
  apiVersion: '2025-01-09', // Use your API version
  useCdn: true,
  token: 'skzc2n38FAcWdKphbs2OIFuZqzDCTX3esplWSKdlJgFvvWehuqSaA8xdMOI3fArYTxmvhX1mClY4PRO72rYPh7Z0mWEc8LZDHnxHGAV9skPUrhqQDDC3zCUKth32bWFymZj1MbnKzekcuOoh8CAR227a4HshoeyiCeVsHhWswEhCBVPYkBNm', // Add your API token here
});

export default sanityClient;
