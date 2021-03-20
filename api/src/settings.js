import dotenv from 'dotenv';
dotenv.config({path:'../.env'})
export const testString = process.env.TEST_STRING;
export const versionNumber = process.env.VERSION_NUMBER;
export const databaseName = process.env.DATABASE_NAME;
export const databaseUser = process.env.DATABASE_USER;
export const databasePass = process.env.DATABASE_PASS;
export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = parseInt(process.env.DATABASE_PORT);
