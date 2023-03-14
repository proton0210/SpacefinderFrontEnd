'use client';
import React from 'react';
import { useUser } from '../UserContext';

type Props = {};
import { useRouter } from 'next/navigation';
const Profile = (props: Props) => {
  const router = useRouter();
  const { user } = useUser();
  if (!user) return router.push('/login');
  return <div className="text-center mt-10">Profile page</div>;
};

export default Profile;
