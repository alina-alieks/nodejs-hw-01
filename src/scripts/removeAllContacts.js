import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    JSON.stringify(await fs.writeFile(PATH_DB, JSON.stringify([])));
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error.message);
  }
};

await removeAllContacts();
