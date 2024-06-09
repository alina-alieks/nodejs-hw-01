import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return contacts;
  } catch (error) {
    console.log('Error:', error.message);
  }
};

console.log(await getAllContacts());
