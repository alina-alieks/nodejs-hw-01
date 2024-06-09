import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const allContacts = await getAllContacts();
  const halfContacts = allContacts.filter(() => Math.random() >= 0.5);
  await fs.writeFile(PATH_DB, JSON.stringify(halfContacts));
  //   console.log(halfContacts);
  return halfContacts;
};

await thanos();
