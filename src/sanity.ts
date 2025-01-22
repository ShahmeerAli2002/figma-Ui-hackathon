import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "qb6wry8z",
  dataset: "production",
  apiVersion: '2025-01-17',
  token:"skzc2n38FAcWdKphbs2OIFuZqzDCTX3esplWSKdlJgFvvWehuqSaA8xdMOI3fArYTxmvhX1mClY4PRO72rYPh7Z0mWEc8LZDHnxHGAV9skPUrhqQDDC3zCUKth32bWFymZj1MbnKzekcuOoh8CAR227a4HshoeyiCeVsHhWswEhCBVPYkBNm",
  useCdn: true,
});

export default client;