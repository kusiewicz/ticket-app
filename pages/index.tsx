import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

const IndexPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user);

  return <h1>pog</h1>;
};

export default IndexPage;
