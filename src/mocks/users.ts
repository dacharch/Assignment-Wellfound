import { formatISO, subDays } from 'date-fns';
import type { User } from '../types/user';

const N = 100;

export const usersMock: User[] = Array.from({ length: N }).map((_, i) => {
  const daysAgo = Math.floor(Math.random() * 30);
  return {
    id: String(i + 1),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: Math.random() > 0.25 ? 'active' : 'inactive',
    createdAt: formatISO(subDays(new Date(), daysAgo)),
    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
  };
});


