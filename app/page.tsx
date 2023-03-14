'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { UserProvider } from './UserContext';
import NavBar from './Navabar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h3 className="text-center mt-10">Welcome to SpaceFinder</h3>;
}
