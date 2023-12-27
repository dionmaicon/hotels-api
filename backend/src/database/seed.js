import startDB from "../boot/database.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { join } from 'path';
import { readdir } from 'fs/promises';

const migrationsFolder = join(__dirname, 'migrations');

const seed = async () => {
    await startDB({
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const option = process.argv[2];
    
    const files = await readdir(migrationsFolder);
    const migrationFilePaths = files.map( file => join(migrationsFolder, file));
    const promises = [];

    
    for (const migrationFilePath of migrationFilePaths) {
        const migration = await import(migrationFilePath);
        
        if (migration && option === 'up') {
            promises.push(await migration.up()); 
        } else if (migration && option === 'down') {
            promises.push(await migration.down());
        }
    }

    Promise.all(promises).then(() => {
        console.log('Done!! \n');
        process.exit(0);
    });
}

export default seed();

