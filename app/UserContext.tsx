'use client';

import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const value: UserContextValue = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
