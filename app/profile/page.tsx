'use client';
import React from 'react';
import { useUser } from '../UserContext';

type Props = {};
import { useRouter } from 'next/navigation';
import Table from './table';
import { AuthService } from '@/services/AuthService';

// async function getData() {
//   const result = [];
//   result.push({
//     Name: 'description',
//     Value: 'Best user ever!',
//   });
//   result.push({
//     Name: 'job',
//     Value: 'Engineer',
//   });
//   result.push({
//     Name: 'age',
//     Value: '25',
//   });
//   result.push({
//     Name: 'experience',
//     Value: '3 years',
//   });
//   return result;
// }

const Profile = async (props: Props) => {
  const router = useRouter();
  const { user } = useUser();
  if (!user) return router.push('/login');
  // const data = await getData();
  // console.log(data);

  return (
    <>
      <div className="text-center mt-10">Welcome </div>
      {/* <Table /> */}
    </>
  );
};

export default Profile;
