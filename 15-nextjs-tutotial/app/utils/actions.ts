'use server';

import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
  revalidatePath('/actions');
};

// export const fetchUsers = async (): Promise<User[]> => {
//   const result = await readFile('users.json', { encoding: 'utf8' });
//   const users = result ? JSON.parse(result) : [];
//   return users;
// };

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
};