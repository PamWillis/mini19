// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB('todos', 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains('todos')) {
            console.log('todos database already exists');
            return;
          }
          db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
          console.log('todos database created');
        },
      });

};


// TODO: Complete the postDb() function below:
export const postDb = async (content) => {
    console.log('Post to the ase');
  
    // Create a connection to the database database and version we want to use.
    const todosDb = await openDB('todos', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = todosDb.transaction('todos', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('todos');
  
    // Use the .add() method on the store and pass in the content.
    const request = store.add({ todo: content });
  
    // Get confirmation of the request.
    const result = await request;
    console.log('Data saved to the database', result);
  };

// TODO: Complete the getDb() function below:
export const getAllDb = async () => {
    console.log('GET all from the database');
  
    // Create a connection to the database database and version we want to use.
    const todosDb = await openDB('todos', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = todosDb.transaction('todos', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('todos');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.getAll();
  
     // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;
  };

// TODO: Complete the deleteDb() function below:
    export const deleteDb = async (id) => {
        console.log('DELETE from the database', id);
        const todosDb = await openDB('todos', 1);
        const tx = todosDb.transaction('todos', 'readonly');
        const store = tx.objectStore('todos');
        const request = store.delete(id);
        const result = await request;
        console.log('result.value', result);
        return result;
      };
  

initdb();
