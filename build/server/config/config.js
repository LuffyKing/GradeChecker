"use strict";

require('dotenv').config();

module.exports = {
  development: {
    DATABASE_URL: process.env.DB_DEV_DATABASE_URL,
    PORT: process.env.DEV_PORT,
    SESSION: process.env.SESSION,
    DOMAIN: process.env.DOMAIN,
    PASSWORD: process.env.PASSWORD,
    USERNAME: process.env.USERNAME
  },
  test: {
    DATABASE_URL: process.env.DB_TEST_DATABASE_URL,
    PORT: process.env.TEST_PORT,
    SESSION: process.env.SESSION,
    DOMAIN: process.env.DOMAIN,
    PASSWORD: process.env.PASSWORD,
    USERNAME: process.env.USERNAME
  },
  production: {
    DATABASE_URL: process.env.DB_DEV_DATABASE_URL,
    PORT: process.env.DEV_PORT,
    SESSION: process.env.SESSION,
    DOMAIN: process.env.DOMAIN,
    PASSWORD: process.env.PASSWORD,
    USERNAME: process.env.USERNAME
  }
};