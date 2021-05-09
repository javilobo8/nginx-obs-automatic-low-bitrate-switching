import { statSync, readFileSync } from 'fs';

const configFilePath = './config.json';

if (!statSync(configFilePath)) {
    throw new Error('config.json file not found');
}

const config = JSON.parse(readFileSync(configFilePath).toString());

export default config;
