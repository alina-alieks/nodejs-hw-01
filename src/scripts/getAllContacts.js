import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return contacts;
};

console.log(await getAllContacts());
