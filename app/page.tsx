'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import SignIn from './SignIn';
import { UserProvider } from './UserContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <UserProvider>
      <SignIn />
    </UserProvider>
  );
}
