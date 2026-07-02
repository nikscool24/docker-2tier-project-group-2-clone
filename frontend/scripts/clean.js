import sh from 'shelljs';
import upath from 'upath';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destPath = upath.resolve(__dirname, '../dist');

sh.rm('-rf', `${destPath}/*`);
