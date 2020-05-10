import './bootstrap';
import {ApplicationConfig} from '@loopback/core';
import {Application} from './application';

export {Application};

export async function main(options: ApplicationConfig = {}) {
  const app = new Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
