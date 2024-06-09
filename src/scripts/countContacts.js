import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
// import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    // const contacts = await getAllContacts();
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.log('Error:', error.message);
  }
};

console.log(await countContacts());
