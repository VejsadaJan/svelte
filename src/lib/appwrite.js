
// src/lib/appwrite.js

import {
    PUBLIC_APPWRITE_ENDPOINT,
    PUBLIC_APPWRITE_PROJECT,
  } from "$env/static/public";
  
  import { Databases, Account, Client } from "appwrite";
  
  const client = new Client();
  client
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT);

    // nastavení pro databázi Svetle
  

    
  const account = new Account(client);
  const databases = new Databases(client);
  
  export const appwrite = {
    client,
    account,
    databases,
  };
