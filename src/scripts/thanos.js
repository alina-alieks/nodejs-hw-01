import { PATH_DB } from '../constants/contacts.js';
// import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    // const contacts = await getAllContacts();
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const halfContacts = contacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(halfContacts, null, 2));
    console.log(halfContacts);
    // return halfContacts;
  } catch (error) {
    console.log('Error:', error.message);
  }
};

await thanos();
