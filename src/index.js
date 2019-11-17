import { serverConfig } from './config';
import server from './server';

let serverInstance = server.start(serverConfig);
