export const SERVER_URL = `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT}` || 'http://localhost:3001';

export const CLIENT_URL = process.env.PORT ? `http://localhost:${process.env.PORT}` : 'http://localhost:3000';
