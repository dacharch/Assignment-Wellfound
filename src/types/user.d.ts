export type UserStatus = 'active' | 'inactive';

export type User = {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
  createdAt: string; 
  avatar?: string;
};
