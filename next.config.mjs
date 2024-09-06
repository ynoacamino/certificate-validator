/** @type {import('next').NextConfig} */

import path from 'node:path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      },
      {
        hostname: 'ieeeynoacamino.blob.core.windows.net',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
